import React from "react";
import Script from "next/script";
import Link from "next/link";
import { Button } from "@nextui-org/react";

function Header() {
  return (
    <>
      <header class="h-auto full-width relative py-[15px] first-letter:lg:py-[26px] ">
        <div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center justify-between mx-auto relative !mt-0 max-w-[1320px]">
          <a class="flex" href="/">
            <img
              class="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]"
              src="./assets/images/logo.svg"
              alt="logo image"
            />
          </a>
          <nav class="w-full z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul class="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">
              <li class="flex items-center group">
                <a
                  class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px] font-bold"
                  href="/"
                >
                  홈
                </a>
              </li>
              <li class="flex items-center group">
                <a
                  class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px] font-bold"
                  href="/"
                >
                  대학소개
                </a>
                <i>
                  <img
                    class="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul class="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="ab1"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/about-1.html"
                    >
                      <span class="whitespace-nowrap">총장인사말</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="ab2"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/about-2.html"
                    >
                      <span class="whitespace-nowrap">대표원장 인사말</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="ab3"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/about-3.html"
                    >
                      <span class="whitespace-nowrap">UND 항공대학 소개</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="ab3"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/about-3.html"
                    >
                      <span class="whitespace-nowrap">비행교육원</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="ab3"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/about-3.html"
                    >
                      <span class="whitespace-nowrap">오시는길</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="flex items-center group">
                <a
                  class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px] font-bold"
                  href="/"
                >
                  교육과정
                </a>
                <i>
                  <img
                    class="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul class="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="sv1"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/services-1.html"
                    >
                      <span class="whitespace-nowrap">교육과정 개요</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="sv2"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/services-2.html"
                    >
                      <span class="whitespace-nowrap">입학생 사전교육</span>
                    </a>
                  </li>

                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="p1"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/pricing-1.html"
                    >
                      <span class="whitespace-nowrap">항공학과 커리큘럼</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="p2"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/pricing-2.html"
                    >
                      <span class="whitespace-nowrap">UND 장학금 안내</span>
                    </a>
                  </li>
                  <li class="hr px-[22px]">
                    <span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span>
                  </li>
                </ul>
              </li>
              <li class="flex items-center group">
                <a
                  class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px] font-bold"
                  href="/"
                >
                  항공사 취업
                </a>
                <i>
                  <img
                    class="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul class="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="contact"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/contact.html"
                    >
                      <span class="whitespace-nowrap">국내 항공사 취업</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="singup"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/signup.html"
                    >
                      <span class="whitespace-nowrap">교관 경력 후 취업</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="flex items-center group">
                <a
                  class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px] font-bold"
                  href="/"
                >
                  준사관 취업
                </a>
                <i>
                  <img
                    class="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul class="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="b1"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/blog-1.html"
                    >
                      <span class="whitespace-nowrap">준사관 소개</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="b2"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/blog-2.html"
                    >
                      <span class="whitespace-nowrap">교과과정</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="single"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/single.html"
                    >
                      <span class="whitespace-nowrap">장점</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="flex items-center group">
                <a
                  class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px] font-bold"
                  href="/"
                >
                  입학안내
                </a>
                <i>
                  <img
                    class="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul class="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="s1"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/shop-1.html"
                    >
                      <span class="whitespace-nowrap">입학설명회</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="s2"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/shop-2.html"
                    >
                      <span class="whitespace-nowrap">설명회 예약</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="flex items-center group">
                <a
                  class="hover:text-green-900 text-base menu-link lg:text-heading-6 mr-[7px] font-bold"
                  href="/"
                >
                  커뮤니티
                </a>
                <i>
                  <img
                    class="icon-caret group-hover:filter-green"
                    src="./assets/images/icons/icon-caret.svg"
                    alt="caret"
                  />
                </i>
                <ul class="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="s1"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/shop-1.html"
                    >
                      <span class="whitespace-nowrap">공지사항</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="s2"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/shop-2.html"
                    >
                      <span class="whitespace-nowrap">항공NEWS</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="product"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/single-product.html"
                    >
                      <span class="whitespace-nowrap">방문상담신청</span>
                    </a>
                  </li>
                  <li
                    class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                    data-menu="product"
                  >
                    <a
                      class="flex items-center text-[14px]"
                      href="/single-product.html"
                    >
                      <span class="whitespace-nowrap">FAQ</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block z-50">
            <button type="button">
              <a
                class="flex items-center inline-block z-10 relative transition-all duration-200 group rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] px-5 py-3 "
                href="#"
              >
                <span class="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo">
                  로그인
                </span>
              </a>
            </button>
          </div>
        </div>
        <div class="burger-icon burger-icon-white menu__icon md:hidden">
          <span class="burger-icon-top"></span>
          <span class="burger-icon-mid"> </span>
          <span class="burger-icon-bottom"></span>
        </div>
        <nav class="fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile opacity-0 pointer-events-none transition-all duration-200 w-[380px] z-[100]">
          <div class="flex items-center border-b p-[15px] lg:p-[26px] gap-[10px] border-[#F2F4F7]">
            <img
              class="max-w-[50px]"
              src="./assets/images/avatar-9.png"
              alt="avatar"
            />
            <div>
              <p class="font-bold">Hi! Steven</p>
              <p class="text-sm font-chivo text-gray-500">
                You have 5 new messages
              </p>
            </div>
          </div>
          <div class="p-[30px]">
            <ul class="font-chivo font-medium text-[16px] leading-[16px]">
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Home</p>
                  <img
                    class="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="hp1">
                    <Link
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/"
                    >
                      Homepage 01
                    </Link>
                  </li>
                  <li class="text-md py-[10px]" id="hp2">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-2.html"
                    >
                      Homepage 02
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="hp3">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-3.html"
                    >
                      Homepage 03
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="hp4">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-4.html"
                    >
                      Homepage 04
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="hp5">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-5.html"
                    >
                      Homepage 05
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="hp6">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-6.html"
                    >
                      Homepage 06
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="hp7">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-7.html"
                    >
                      Homepage 07
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="hp8">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/home-8.html"
                    >
                      Homepage 08
                    </a>
                  </li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>About</p>
                  <img
                    class="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="ab1">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/about-1.html"
                    >
                      About 01
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="ab2">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/about-2.html"
                    >
                      About 02
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="ab3">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/about-3.html"
                    >
                      About 03
                    </a>
                  </li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Services</p>
                  <img
                    class="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="sv1">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/services-1.html"
                    >
                      Services 01
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="sv2">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/services-2.html"
                    >
                      Services 02
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="p1">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/pricing-1.html"
                    >
                      Pricing 01
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="p2">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/pricing-2.html"
                    >
                      Pricing 02
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="faqs1">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/faqs-1.html"
                    >
                      FAQS 01
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="faqs2">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/faqs-2.html"
                    >
                      FAQS 02
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="career">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/career.html"
                    >
                      Career
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="career-details">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/career-details.html"
                    >
                      Career Detials
                    </a>
                  </li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Pages</p>
                  <img
                    class="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="contact">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/contact.html"
                    >
                      Contact
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="singup">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/signup.html"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="login">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/login.html"
                    >
                      Log In
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="rp">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/reset-password.html"
                    >
                      Reset Password
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="error404">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/error-404.html"
                    >
                      Error 404
                    </a>
                  </li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Blog</p>
                  <img
                    class="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="b1">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/blog-1.html"
                    >
                      Blog 01
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="b2">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/blog-2.html"
                    >
                      Blog 02
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="single">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/single.html"
                    >
                      Blog Single
                    </a>
                  </li>
                </ul>
              </li>
              <li class="group menu-mobile-item py-[13px]">
                <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Shop</p>
                  <img
                    class="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul class="pl-5 menu-child hidden pt-[10px]">
                  <li class="text-md py-[10px]" id="s1">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/shop-1.html"
                    >
                      Shop 01
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="s2">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/shop-2.html"
                    >
                      Shop 02
                    </a>
                  </li>
                  <li class="text-md py-[10px]" id="product">
                    <a
                      class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/single-product.html"
                    >
                      Product Details
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]">
              <p class="font-bold text-heading-6 mb-[10px]">Your Account</p>
              <ul class="text-[15px]">
                <li class="py-[13px]">
                  <a
                    class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Profile
                  </a>
                </li>
                <li class="py-[13px]">
                  <a
                    class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Work Preferences
                  </a>
                </li>
                <li class="py-[13px]">
                  <a
                    class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    My Boosted Shots
                  </a>
                </li>
                <li class="py-[13px]">
                  <a
                    class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    My Collections
                  </a>
                </li>
                <li class="py-[13px]">
                  <a
                    class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Account Settings
                  </a>
                </li>
                <li class="py-[13px]">
                  <a
                    class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Go Pro
                  </a>
                </li>
                <li class="py-[13px]">
                  <a
                    class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-gray-400 font-chivo text-[13px]">
              Copyright 2022 © Agon - Agency Template.
              <br />
              <span>Designed by</span>
              <a class="text-green-900" href="http://alithemes.com">
                &nbsp;AliThemes
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
