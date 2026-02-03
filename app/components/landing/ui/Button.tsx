import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  as: "anchor";
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variants: Record<ButtonVariant, string> = {
  primary: "bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 shadow-lg shadow-violet-500/25",
  secondary: "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800",
  outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100",
  ghost: "text-slate-600 hover:bg-slate-100 active:bg-slate-200",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[36px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-lg min-h-[52px]",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children
  } = props;

  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.as === "link") {
    return (
      <Link href={props.href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  if (props.as === "anchor") {
    return (
      <a href={props.href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type || "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
