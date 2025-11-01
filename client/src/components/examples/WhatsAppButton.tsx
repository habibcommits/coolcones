import { ThemeProvider } from "../ThemeProvider";
import { WhatsAppButton } from "../WhatsAppButton";

export default function WhatsAppButtonExample() {
  return (
    <ThemeProvider>
      <div className="h-screen relative">
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}
