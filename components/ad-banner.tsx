"use client"

interface AdBannerProps {
  slot: string
  format?: "horizontal" | "vertical" | "rectangle"
  className?: string
}

export function AdBanner({ slot, format = "horizontal", className = "" }: AdBannerProps) {
  // This is a placeholder for Google AdSense
  // Replace with actual AdSense code after approval

  const formatClasses = {
    horizontal: "h-24 md:h-32",
    vertical: "h-96",
    rectangle: "h-64",
  }

  return (
    <div
      className={`w-full ${formatClasses[format]} bg-muted border border-border rounded-lg flex items-center justify-center ${className}`}
    >
      <div className="text-center text-muted-foreground text-sm">
        <p className="font-medium">Espaço Publicitário</p>
        <p className="text-xs mt-1">Google AdSense - Slot: {slot}</p>
      </div>
      {/* 
      Replace with actual AdSense code:
      <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot={slot}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      */}
    </div>
  )
}
