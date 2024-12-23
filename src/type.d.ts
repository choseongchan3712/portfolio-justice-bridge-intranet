import React from "react";

export interface GridWrapType {
  rows: string;
  columns: string;
  areas: string;
  gap: string;
  padding: string;
  height: string;
  children: React.ReactNode;
}

export interface ContentsWrapType {
  className: string;
  title: string;
  children: React.ReactNode;
}

export interface NoticeContainerType {
  barColor: string;
  title: string;
  areaName: string;
}

export interface RatesWrapType {
  type: string;
  areaName: string;
}

export interface PopUpContentsType {
  children: React.ReactNode;
}

export interface DocContainerType {
  areaName: string;
  title: string;
}

export interface LawContainerType {
  color: string;
  areaName: string;
  children: React.ReactNode;
}