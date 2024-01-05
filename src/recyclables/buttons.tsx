import React from "react";
import { TbCircleArrowRightFilled } from "react-icons/tb";

interface ButtonProps {
  text: string;
  background: string;
  rounded: boolean;
  transparent: boolean;
  onClick?: (() => void) | null;
}

export const AppButton: React.FC<ButtonProps> = ({
  text,
  background,
  rounded,
  transparent,
  onClick,
}) => {
  const borderRadius = rounded ? "99px" : "0px";
  const backgroundColor = transparent ? "transparent" : background;
  const buttonStyles = `px-5 py-2 border-white h-fit border flex flex-row justify-center items-center text-md border-1 text-white hover:text-orange-950 hover:border-orange-950 hover:in-expo hover:duration-300 ${backgroundColor}`;

  return (
    <button
      onClick={() => onClick && onClick()}
      className={buttonStyles}
      style={{ borderRadius }}
    >
      {text}
    </button>
  );
};

interface IconButtonProps {
  backgroundColor: string;
  textStyle?: string;
  iconColor?: string;
  Icon?: React.ElementType; // This allows you to pass an icon component from react-icons
  text: string;
  onClick?: (() => void) | null;
}

export const IconButton: React.FC<IconButtonProps> = ({
  backgroundColor,
  Icon = TbCircleArrowRightFilled,
  text,
  onClick,
  textStyle = "",
}) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`flex items-center w-fitjustify-center px-3 ${
        text == "" ? "ps-3" : "ps-7"
      } py-2 gap-5 rounded-lg hover:${backgroundColor}/50 transition-all duration-300 ${backgroundColor}`}
    >
      {text == "" ? null : (
        <span className={`${textStyle} text-lg font-medium`}>{text}</span>
      )}
      <Icon className={`text-3xl ${textStyle} md:text-0`} />
    </button>
  );
};

export const PurpleIconButton: React.FC<IconButtonProps> = ({
  Icon = TbCircleArrowRightFilled,
  text,
  onClick,
  textStyle,
}) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`flex items-center w-fit magic-btn justify-center px-4 ps-7 py-1 border gap-3 bg-purple-800 rounded-full transition-all duration-300`}
    >
      <span className={`${textStyle} text-white text-lg font-medium`}>
        {text}
      </span>
      <Icon className={`text-3xl text-white  md:text-0`} />
    </button>
  );
};

export const WhiteIconButton: React.FC<IconButtonProps> = ({
  Icon = TbCircleArrowRightFilled,
  text,
  onClick,
  textStyle = "",
  backgroundColor,
}) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`flex items-center w-fit magic-btn justify-center px-3 ps-7 py-1 border gap-3 border-white bg-white rounded-full ease-in transition-all duration-300`}
    >
      <span className={`${textStyle} text-lg text-green_s4 font-medium`}>
        {text}
      </span>
      <Icon
        className={`text-3xl text-green_s4  md:text-0 transition-transform duration-300 hover:scale-0 ease-in-expo`}
      />
    </button>
  );
};
