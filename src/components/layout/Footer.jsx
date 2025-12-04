"use client";
import Image from "next/image";
import IcapButton from "@/components/ui/IcapButton"


export default function Footer() {
    return (
        <section className="py-4">
            {/* div اصلی */}
            <div className="container mx-auto w-[1440] gap-6">
                {/* div Right */}
                <div className="gap-4">
                    {/* div Right 1 */}
                    <div className="bg-gray-100 rounded-2xl">
                        {/* Logo */}
                        {/* text  */}
                        {/* icon list  */}
                    </div>

                    {/* div Right 2 */}
                    <div className="bg-gray-100 rounded-2xl">
                        {/* contact us title  */}
                        {/* mail  */}
                        {/* call  */}
                        {/* addres  */}
                    </div>

                    {/* div Right 3 */}
                    <div className="bg-gray-100 rounded-2xl">
                        <div>
                            {/* box title  */}
                            {/* list item 1  */}
                            {/* list item 2  */}
                            {/* list item 3  */}
                            {/* list item 4  */}
                            {/* list item 5  */}
                        </div>
                        <div>
                            {/* box title  */}
                            {/* list item 1  */}
                            {/* list item 2  */}
                            {/* list item 3  */}
                            {/* list item 4  */}
                            {/* list item 5  */}
                        </div>
                        <div>
                            {/* box title  */}
                            {/* list item 1  */}
                            {/* list item 2  */}
                            {/* list item 3  */}
                            {/* list item 4  */}
                            {/* list item 5  */}
                        </div>

                        {/* E-Namad  */}
                    </div>
                </div>

                {/* div Left */}
                <div className="bg-gray-100 rounded-2xl">
                    {/* mobile pic */}
                    <div className="relative">
                        <Image
                            src="/images/Application.png"
                            width={300}
                            height={300}
                            alt="اپلیکیشن"
                            className="-mt-24 md:mt-16 mx-auto md:mx-0"
                        />
                    </div>
                    {/* text  */}
                    <p className="font-bold ">اپلیکیشن مکانیک یاب و عیب یاب</p>
                    {/* btn 1 */}
                    <IcapButton>سلام</IcapButton>
                    {/* btn 2 */}
                </div>
            </div>

            {/* نوار مشکی پایین */}
            <div className="bg-black text-center py-2 mt-4 w-full">
                <p className="text-white text-sm m-0">
                    تمامی حقوق برای فروشگاه ساعتچی محفوظ است.
                </p>
            </div>

        </section>
    );
}