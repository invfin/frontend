import type { SidebarMenu } from "@/types";
import marketResearchBlack from '@/assets/images/icons/market-research-b.svg';
import marketResearchWhite from '@/assets/images/icons/market-research-w.svg';
import walletBlack from "@/assets/images/icons/wallet-b.svg"
import walletWhite from "@/assets/images/icons/wallet-w.svg"

import blogBlack from "@/assets/images/icons/blog-b.svg"
import blogWhite from "@/assets/images/icons/blog-w.svg"

import homeBlack from "@/assets/images/icons/home-b.svg"
import homeWhite from "@/assets/images/icons/home-w.svg"

import questionBlack from "@/assets/images/icons/question-b.svg"
import questionWhite from "@/assets/images/icons/question-w.svg"

import robotBlack from "@/assets/images/icons/robot-b.svg"
import robotWhite from "@/assets/images/icons/robot-w.svg"

import bookBlack from "@/assets/images/icons/book-b.svg"
import bookWhite from "@/assets/images/icons/book-w.svg"

import superinvestorBlack from "@/assets/images/icons/superinvestor-b.svg"
import superinvestorWhite from "@/assets/images/icons/superinvestor-w.svg"


export const LONG_MAX_AGE = 2505600 // 29 days in seconds
export const SHORT_MAX_AGE = 86400 // 1 days in seconds

export const SIDEBAR_MENUS = [
  { title: "Inicio", path: "/", logos: { white: homeBlack, black: homeWhite }, available: true, },

  { title: "Screener", path: "/companies", logos: { white: marketResearchBlack, black: marketResearchWhite }, available: true, },
  { title: "Portfolio", path: "/portfolio", logos: { white: walletBlack, black: walletWhite }, available: true, },

  { title: "Super Inversores", path: "/superinvestors", logos: { white: superinvestorBlack, black: superinvestorWhite }, available: true, },
  { title: "Diccionario", path: "/diccionario", logos: { white: bookBlack, black: bookWhite }, available: true, },
  { title: "Preguntas", path: "/preguntas", logos: { white: questionBlack, black: questionWhite }, available: true, },

  { title: "Blogs", path: "/blogs", logos: { white: blogBlack, black: blogWhite }, available: true, },

  { title: "Roboadvisor", path: "/roboadvisors", logos: { white: robotBlack, black: robotWhite }, available: false, },

] as SidebarMenu[];
