// Create custom SVG components for all product logos
export const CursorIcon = ({ size = 56 }: { size?: number }) => (
    <div className="flex items-center justify-center w-full h-full text-primary">
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Cursor</title>
            <path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill="currentColor" fillOpacity="0.8" />
            <path d="M22.35 18V6L11.925 0v12l10.425 6z" fill="currentColor" fillOpacity="0.5" />
            <path d="M11.925 0L1.5 6v12l10.425-6V0z" fill="currentColor" fillOpacity="0.6" />
            <path d="M22.35 6L11.925 24V12L22.35 6z" fill="currentColor" fillOpacity="0.7" />
            <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="currentColor" fillOpacity="0.9" />
        </svg>
    </div>
);

export const V0Icon = ({ size = 56 }: { size?: number }) => (
    <div className="flex items-center justify-center w-full h-full text-primary">
        <svg fill="currentColor" height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>V0</title>
            <path clipRule="evenodd" fillRule="evenodd" d="M14.252 8.25h5.624c.088 0 .176.006.26.018l-5.87 5.87a1.889 1.889 0 01-.019-.265V8.25h-2.25v5.623a4.124 4.124 0 004.125 4.125h5.624v-2.25h-5.624c-.09 0-.179-.006-.265-.018l5.874-5.875a1.9 1.9 0 01.02.27v5.623H24v-5.624A4.124 4.124 0 0019.876 6h-5.624v2.25zM0 7.5v.006l7.686 9.788c.924 1.176 2.813.523 2.813-.973V7.5H8.25v6.87L2.856 7.5H0z" />
        </svg>
    </div>
);

export const ReplitIcon = ({ size = 56 }: { size?: number }) => (
    <div className="flex items-center justify-center w-full h-full">
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Replit</title>
            <path d="M11.878 7.761H3.482A1.469 1.469 0 012 6.304V1.457C2 .644 2.67 0 3.482 0h6.913c.827 0 1.483.658 1.483 1.457v6.304zM20.882 16.215h-8.995V7.75h8.995c.87 0 1.588.717 1.588 1.586v5.294c0 .885-.717 1.586-1.588 1.586zM10.395 24H3.482C2.67 24 2 23.343 2 22.546v-4.853c0-.797.67-1.454 1.482-1.454h8.396v6.307c0 .797-.67 1.454-1.483 1.454z" fill="#FD5402" />
        </svg>
    </div>
);

export const ManusIcon = ({ size = 56 }: { size?: number }) => (
    <div className="flex items-center justify-center w-full h-full text-primary">
        <svg fill="currentColor" height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Manus</title>
            <path d="M8.047 1.163A.936.936 0 119.863.709c.063.256.132.508.2.76l.005.016c.158.58.315 1.16.416 1.771a.936.936 0 11-1.847.305c-.085-.517-.203-.949-.346-1.473v-.002c-.075-.274-.157-.573-.244-.923zM3.67 2.753a.936.936 0 00.428 1.252c.667.327 1.245.65 1.818 1.295a.936.936 0 001.4-1.242C6.5 3.138 5.66 2.687 4.922 2.325a.936.936 0 00-1.252.428z" />
            <path clipRule="evenodd" fillRule="evenodd" d="M15.672 21.284c-.17-.036-.356-.075-.546-.117-.7-.152-1.65-.365-2.097-.513l-.033-.011-.032-.012c-.198-.074-.534-.156-1.09-.283l-.103-.023c-.48-.11-1.07-.244-1.63-.413-.578-.176-1.294-.437-1.903-.862-.638-.446-1.364-1.232-1.404-2.412a5.024 5.024 0 01.009-.51 2.716 2.716 0 01-.65-1.24 2.632 2.632 0 01.03-1.275c.083-.317.21-.594.316-.8.036-.07.073-.14.11-.206-.35-.111-.747-.248-1.133-.412-.503-.215-1.218-.57-1.752-1.141a2.798 2.798 0 01-.71-1.327 2.55 2.55 0 01.226-1.68c.604-1.208 1.757-1.635 2.782-1.672.926-.033 1.912.226 2.795.536.804.282 1.955.807 2.933 1.264.322-.529.747-1.126 1.149-1.608l.08-.095.092-.084a3.43 3.43 0 012.06-.887 3.559 3.559 0 011.059.08l.036.008.023.007h.003l.002.001s.002 0-.477 1.786l.479-1.786.208.058.19.102c.964.516 1.238 1.406 1.31 1.876a2.9 2.9 0 01-.008.903l-.003.018v.005l-1.858-.37 1.857.371-.01.054-.3 1.19c-.058.292-.065.459-.062.547a.286.286 0 00.016.107v.001c.013.03.043.095.154.263.043.066.088.131.144.214l.058.084c.08.118.174.257.274.412.623.97.684 1.902.68 2.499v.026l.238.078.103.032.153.049c.076.024.173.056.267.09.11-.202.407-.636.945-.636.702 0 .99.987.99.987.275 1.838-.98 8.013-2.794 9.164-1.386.88-2.413-.427-3.176-2.437zM8.72 12.868c.118-.119.47-.37 1.136-.445a4.337 4.337 0 012.228.365c.623.276 1.053.908 1.233 1.667.088.371.104.731.066 1.025-.04.31-.128.465-.169.511-.05.058-.228.157-.721.053a3.417 3.417 0 01-.764-.266l-.006-.003a.936.936 0 00-.861 1.662h.001l.003.002.008.004.024.012a4.888 4.888 0 00.34.152c.215.086.52.194.866.267.615.13 1.75.23 2.52-.652.37-.424.548-.98.615-1.501a4.789 4.789 0 00-.1-1.697c-.268-1.128-.976-2.362-2.297-2.948a6.208 6.208 0 00-3.195-.513c-.619.07-1.211.242-1.69.504l-.02-.006h-.004c-1.183-.338-3.536-1.01-2.956-2.17.44-.88 1.643-.807 3.275-.234.663.232 1.584.647 2.453 1.051.27.125.534.25.784.367l.974.454c.693-.832.962-1.29 1.2-1.695.163-.278.312-.53.573-.862l.025-.032a9.902 9.902 0 01.146-.18.895.895 0 01.02-.017c.642-.567 1.389-.36 1.389-.36.427.228.318.806.318.806l-.296 1.178c-.284 1.386.03 1.845.547 2.6.09.133.188.275.29.433.412.643.392 1.26.377 1.765-.01.324-.019.602.09.809.224.425 1.06.69 1.61.862.132.042.247.078.333.11l.059.023c-.078.24-.148.489-.218.737-.313 1.103-.623 2.202-1.55 2.53-.632.225-1.263.214-1.71.156-.786-.17-1.716-.379-2.066-.495-.363-.135-.871-.25-1.424-.377-1.316-.3-2.883-.656-3.331-1.462a.975.975 0 01-.125-.447c-.026-.74.234-1.404.234-1.404s-.403.002-.685-.27a.853.853 0 01-.238-.431c-.03-.13-.042-.28-.025-.44.008 0 .012-.008.012-.028 0-.234.234-.702.702-1.17z" />
            <path d="M14.077.604a.936.936 0 01.315 1.285c-.355.584-.561 1.181-.786 2.081a.936.936 0 11-1.816-.454c.243-.971.504-1.778 1.002-2.598a.936.936 0 011.285-.314z" />
        </svg>
    </div>
);

// WindsurfIcon updated to use direct PNG image
export const WindsurfIcon = ({ size = 56 }: { size?: number }) => (
    <div className="flex items-center justify-center w-full h-full">
        <div style={{ width: size, height: size, position: 'relative' }}>
            <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="512" rx="100" fill="#111111" />
                <path 
                    d="M149 128C149 128 224 102 299 152C374 202 363 273 363 273"
                    stroke="#4CD3A5" 
                    strokeWidth="40" 
                    strokeLinecap="round" 
                />
                <path 
                    d="M149 228C149 228 224 202 299 252C374 302 363 373 363 373"
                    stroke="#4CD3A5" 
                    strokeWidth="40" 
                    strokeLinecap="round" 
                />
                <path 
                    d="M149 328C149 328 224 302 299 352C374 402 363 473 363 473"
                    stroke="#4CD3A5" 
                    strokeWidth="40" 
                    strokeLinecap="round" 
                />
            </svg>
        </div>
    </div>
);

export const BuilderIoIcon = ({ size = 56 }: { size?: number }) => (
    <div className="flex items-center justify-center w-full h-full">
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="176" height="176" rx="32" fill="currentColor" fillOpacity="0.2" />
            <rect x="72" y="72" width="48" height="48" rx="8" fill="currentColor" />
            <rect x="136" y="72" width="48" height="48" rx="8" fill="currentColor" fillOpacity="0.6" />
            <rect x="72" y="136" width="48" height="48" rx="8" fill="currentColor" fillOpacity="0.6" />
            <rect x="136" y="136" width="48" height="48" rx="8" fill="currentColor" fillOpacity="0.3" />
        </svg>
    </div>
);

export const DevinIcon = ({ size = 56 }: { size?: number }) => (
    <div className="flex items-center justify-center w-full h-full">
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="128" r="80" fill="currentColor" fillOpacity="0.5" />
            <path d="M112 96L144 128L112 160" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

// Export all logo components
export const ProductLogos = {
    "Cursor": ({ size = 56 }: { size?: number }) => <CursorIcon size={size} />,
    "Windsurf": ({ size = 56 }: { size?: number }) => <WindsurfIcon size={size} />,
    "V0.dev": ({ size = 56 }: { size?: number }) => <V0Icon size={size} />,
    "Builder.io": ({ size = 56 }: { size?: number }) => <BuilderIoIcon size={size} />,
    "Replit": ({ size = 56 }: { size?: number }) => <ReplitIcon size={size} />,
    "Manus": ({ size = 56 }: { size?: number }) => <ManusIcon size={size} />,
    "Devin": ({ size = 56 }: { size?: number }) => <DevinIcon size={size} />
}; 