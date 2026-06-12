import React from "react";
import { AntDesign, Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export const I = {
  Mountain: (props: { size?: number; color?: string }) => (
    <MaterialCommunityIcons name="image-filter-hdr" size={props.size || 20} color={props.color || "#0F172A"} />
  ),
  Clock: (props: { size?: number; color?: string }) => (
    <Feather name="clock" size={props.size || 20} color={props.color || "#0F172A"} />
  ),
  Users: (props: { size?: number; color?: string }) => (
    <Feather name="users" size={props.size || 20} color={props.color || "#0F172A"} />
  ),
  Pin: (props: { size?: number; color?: string }) => (
    <Feather name="map-pin" size={props.size || 18} color={props.color || "#0F172A"} />
  ),
  Shield: (props: { size?: number; color?: string }) => (
    <Feather name="shield" size={props.size || 20} color={props.color || "#0F172A"} />
  ),
  Check: (props: { size?: number; color?: string }) => (
    <Feather name="check" size={props.size || 18} color={props.color || "#008080"} />
  ),
  X: (props: { size?: number; color?: string }) => (
    <Feather name="x" size={props.size || 18} color={props.color || "#D97706"} />
  ),
  Search: (props: { size?: number; color?: string }) => (
    <Feather name="search" size={props.size || 20} color={props.color || "#0F172A"} />
  ),
  Heart: (props: { size?: number; color?: string }) => (
    <AntDesign name="hearto" size={props.size || 18} color={props.color || "#0F172A"} />
  ),
  Star: (props: { size?: number; color?: string }) => (
    <AntDesign name="star" size={props.size || 18} color={props.color || "#D97706"} />
  ),
  Map: (props: { size?: number; color?: string }) => (
    <Feather name="map" size={props.size || 18} color={props.color || "#0F172A"} />
  ),
  Calendar: (props: { size?: number; color?: string }) => (
    <Feather name="calendar" size={props.size || 18} color={props.color || "#0F172A"} />
  ),
  Sun: (props: { size?: number; color?: string }) => (
    <Feather name="sun" size={props.size || 18} color={props.color || "#0F172A"} />
  ),
  Sparkle: (props: { size?: number; color?: string }) => (
    <Feather name="star" size={props.size || 16} color={props.color || "#0F172A"} />
  ),
  Whatsapp: (props: { size?: number; color?: string }) => (
    <FontAwesome5 name="whatsapp" size={props.size || 20} color={props.color || "#25D366"} />
  ),
  Menu: (props: { size?: number; color?: string }) => (
    <Feather name="menu" size={props.size || 20} color={props.color || "#0F172A"} />
  ),
  Close: (props: { size?: number; color?: string }) => (
    <Feather name="x" size={props.size || 20} color={props.color || "#0F172A"} />
  ),
  Info: (props: { size?: number; color?: string }) => (
    <Feather name="info" size={props.size || 20} color={props.color || "#0F172A"} />
  ),
  Phone: (props: { size?: number; color?: string }) => (
    <Feather name="phone" size={props.size || 18} color={props.color || "#0F172A"} />
  )
};
export default I;
