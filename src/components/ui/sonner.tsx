import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group "
      style={
        {
          "--normal-bg": "#1E293B",            // พื้นหลัง
      "--normal-text": "#F1F5F9",          // สีข้อความ
      "--normal-border": "#334155",        // สีเส้นขอบ
      "--success-bg": "#22c55e",           // toast.success
      "--error-bg": "#ef4444",             // toast.error
      "--info-bg": "#3b82f6",              // toast.info
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
