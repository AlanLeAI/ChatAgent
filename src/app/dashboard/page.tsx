import { BotIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex h-full items-center justify-center p-4 relative overflow-hidden">
      {/* Vibrant Gradient Background */}
      <div className="absolute inset-0 -z-20 bg-neutral-50"></div>
      <div className="relative max-w-2xl w-full">
        <div className="relative space-y-6 p-8 text-center">
          <div className="bg-white/70 backdrop-blur-md shadow-lg ring-1 ring-white/30 rounded-2xl p-6 space-y-4">
            <div className="bg-gradient-to-br from-sky-950 via-blue-900 to-slate-900 rounded-xl p-4 inline-flex">
              <BotIcon className="w-12 h-12 text-neutral-50" />
            </div>
            <h2 className="text-2xl font-semibold bg-gradient-to-br from-sky-950 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              <u>A</u>sk an <u>A</u>I <u>A</u>gent <u>A</u>nything!
            </h2>
            <p className="text-gray-700 max-w-md mx-auto">
              Your AI assistant is ready to help with any task.
            </p>
            <div className="pt-2 flex justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                Real-time responses
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                Smart assistance
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                Powerful tools
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}