import Image from "next/image";
import Link from "next/link";

export default function WechatQRPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]/95 dark:bg-black/40 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-sm w-full space-y-6 text-center">
        <Image
          src="/images/wechat_QR.png"
          alt="WeChat QR code - 姚昌伟"
          width={400}
          height={400}
          className="w-full h-auto rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800"
          priority
        />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Scan the QR code to add me on WeChat
        </p>
        <Link
          href="/"
          className="inline-block text-xs text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
