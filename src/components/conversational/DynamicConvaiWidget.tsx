import { useEffect } from "react"

export const DynamicConvaiWidget = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
    script.async = true
    script.type = "text/javascript"
    script.id = "elevenlabs-convai-script"
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }

      const widget = document.getElementById("elevenlabs-convai-widget")
      if (widget) {
        widget.remove()
      }
    }
  }, [])

  return null
}
