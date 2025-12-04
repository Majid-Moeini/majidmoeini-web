"use client";

import { useState } from "react";
import { toFarsiNumber } from "../../app/layout";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import { NAV_ITEMS } from "../../app/data/navItems";

// icons
import FacebookIcon from "../icons/FacebookIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import TelegramIcon from "../icons/TelegramIcon";
import InstagramIcon from "../icons/InstagramIcon";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    return (
        <header className="h-fit shadow-sm shadow-gray-300 md:px-[6%] md:pt-4 z-10">
            <div className="hidden md:flex md:justify-end">
                <div className=" md:flex flex-row-reverse h-fit w-66 justify-between">
                    <a href="" className="flex items-center gap-3">
                        <Image src="/images/icons/sms-tracking.png"
                            width={24}
                            height={24}
                            alt="sms-tracking"
                            className="w-6 h-6" />
                        <p className="text-xs font-bold text-gray-800 hover:text-primary">info@r-icap.com</p></a>
                    <a href="#" className="flex items-center gap-3">
                        <Image src="/images/icons/call-calling.png"
                            width={24}
                            height={24}
                            alt="call-calling"
                            className="w-6 h-6" />
                        <p className="text-xs font-bold text-gray-800 hover:text-primary">{toFarsiNumber('09301234567')}</p>
                        {/* <p dir="ltr" className="text-right">{toFarsiNumber('0930 - 1234567')}</p> */}
                    </a>
                </div>
            </div>

            <div className="h-fit items-center md:flex md:w-full md:flex-row-reverse md:justify-between md:py-4">

                <div className="hidden md:flex h-fit flex-row-reverse gap-2">
                    <a href="#" className="p-1 text-gray-500 ">
                        <FacebookIcon />
                    </a>
                    <a href="" className="p-1 text-gray-500">
                        <WhatsappIcon />
                    </a>
                    <a href="" className="p-1 text-gray-500">
                        <TelegramIcon />
                    </a>
                    <a href="" className="p-1 text-gray-500">
                        <InstagramIcon />
                    </a>
                </div>

                <nav className="hidden md:flex gap-7 h-fit">
                    {NAV_ITEMS.map(item => (
                        <MenuItem
                            key={item.id}
                            title={item.label}
                            address={item.href}
                            isActive={activeItem === item.id}
                            onClick={() => setActiveItem(item.id)}
                        />
                    ))}
                </nav>

                {/* Desctop logo */}
                <Image
                    src="/images/iCAP-Logo.png"
                    width={190}
                    height={53}
                    alt="iCAP-logo"
                    className="w-auto h-9 hidden md:block"
                />

                <div className="flex justify-between items-center h-fit px-4 py-2 md:hidden">

                    {/* burgur btn */}
                    {!isOpen && (
                        <div className="md:hidden flex">
                            <button onClick={() => setIsOpen(true)} className="flex flex-col gap-1">
                                <span className="block w-6 h-0.5 bg-black rounded-2xl"></span>
                                <span className="block w-6 h-0.5 bg-black opacity-35 rounded-2xl"></span>
                                <span className="block w-6 h-0.5 bg-black rounded-2xl"></span>
                            </button>
                        </div>
                    )}

                    {/* Close btn (LEFT aligned) */}
                    {isOpen && (
                        <div className="md:hidden flex w-full my-2">
                            <button
                                className="p-2 mr-auto"
                                onClick={() => setIsOpen(false)}
                            >
                                <Image
                                    src="/images/icons/close-icon.png"
                                    width={16}
                                    height={16}
                                    alt="close"
                                    className="w-4 h-4"
                                />
                            </button>
                        </div>
                    )}

                    {/* Mobile logo */}
                    {!isOpen && (
                        <Image
                            src="/images/iCAP-Logo.png"
                            width={190}
                            height={53}
                            alt="iCAP-logo"
                            className="w-auto h-6 md:hidden"
                        />
                    )}

                    {/* call icon gray */}
                    {!isOpen && (
                        <Image
                            src="/images/icons/call-calling-gray.png"
                            width={24}
                            height={24}
                            alt="call-calling"
                            className="w-6 h-6 md:hidden"
                        />
                    )}
                </div>

                {isOpen && (
                    <div className="flex flex-col w-full h-screen absolute md:hidden">
                        <nav className="flex flex-col bg-white">
                            {NAV_ITEMS.map(item => (
                                <MenuItem
                                    key={item.id}
                                    title={item.label}
                                    address={item.href}
                                    mobile
                                    isActive={activeItem === item.id}
                                    onClick={() => {
                                        setActiveItem(item.id);
                                        setIsOpen(false);
                                    }}
                                />
                            ))}
                        </nav>

                        <div className="flex-1">

                        </div>

                        <div className="flex bg-gray-50 w-full py-4 justify-center">
                            <Image
                                src="/images/iCAP-Logo.png"
                                width={190}
                                height={53}
                                alt="iCAP-logo"
                                className="w-auto h-6 "
                            />
                        </div>

                        <div className="flex flex-row-reverse h-fit justify-between px-7 py-4">
                            <a href="" className="flex items-center gap-3">
                                <div className="p-2">
                                    <Image src="/images/icons/sms-tracking.png"
                                        width={24}
                                        height={24}
                                        alt="sms-tracking"
                                        className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <p className="text-xs font-bold text-gray-600 ">ارسال ایمیل</p>
                                    <p className="text-xs font-bold text-gray-800 ">info@r-icap.com</p>
                                </div>
                            </a>
                            <a href="#" className="flex items-center gap-3">
                                <div className="p-2">
                                    <Image src="/images/icons/call-calling.png"
                                        width={24}
                                        height={24}
                                        alt="call-calling"
                                        className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <p className="text-xs font-bold text-gray-600 ">شماره تماس</p>
                                    <p className="text-xs font-bold text-gray-800 ">{toFarsiNumber('09301234567')}</p>
                                </div>
                                {/* <p dir="ltr" className="text-right">{toFarsiNumber('0930 - 1234567')}</p> */}
                            </a>
                        </div>
                        <div className="h-14 bg-primary flex justify-around items-center">
                            <a href="#" className=" p-1 ">
                                <InstagramIcon className="text-white w-6 h-6" />
                            </a>

                            <a href="#" className=" p-1 ">
                                <TelegramIcon className="text-white w-6 h-6" />
                            </a>

                            <a href="#" className=" p-1 ">
                                <WhatsappIcon className="text-white w-6 h-6" />
                            </a>

                            <a href="#" className=" p-1 ">
                                <FacebookIcon className="text-white w-6 h-6" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}