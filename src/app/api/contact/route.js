export async function POST(request) {
  try {
    const data = await request.json();

    const { name, companyName, email, role, developerType, message } = data;

    if (
      typeof email !== "string" ||
      !email.trim() ||
      email.length > 254 ||
      typeof role !== "string" ||
      !role.trim() ||
      (role === "hr_specialist"
        ? typeof companyName !== "string" || !companyName.trim()
        : typeof name !== "string" || !name.trim())
    ) {
      return Response.json(
        { error: "اطلاعات فرم نامعتبر است" },
        { status: 400 },
      );
    }

    const text = [
      "📩 فرم جدید سایت",
      "",
      `👤 نام: ${name || "-"}`,
      `🏢 نام شرکت: ${companyName || "-"}`,
      `📧 ایمیل: ${email}`,
      `💼 سمت: ${role}`,
      `👨‍💻 تخصص: ${developerType || "-"}`,
      `💬 پیام: ${message || "-"}`,
    ].join("\n");

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram environment variables are missing");

      return Response.json(
        { error: "تنظیمات تلگرام انجام نشده است" },
        { status: 500 },
      );
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
        signal: AbortSignal.timeout(10000),
      },
    );

    const result = await telegramResponse.json();

    if (!telegramResponse.ok || !result.ok) {
      console.error("Telegram API error:", result.description);

      return Response.json(
        { error: "ارسال پیام به تلگرام ناموفق بود" },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        error: "ارسال فرم ناموفق بود",
        details: error.message,
      },
      { status: 500 },
    );
  }
}
