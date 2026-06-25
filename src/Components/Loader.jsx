import { useEffect, useState } from "react";

export default function Loader({ finishLoading }) {

    const [progress, setProgress] = useState(0);

    const [text, setText] = useState("Initializing Developer...");

    useEffect(() => {

        const messages = [
            "Initializing Developer...",
            "Loading React...",
            "Loading Components...",
            "Loading Portfolio...",
            "Loading Projects...",
            "Loading Skills...",
            "Welcome..."
        ];

        let index = 0;

        const messageInterval = setInterval(() => {

            if (index < messages.length - 1) {

                index++;

                setText(messages[index]);

            }

        }, 500);

        const progressInterval = setInterval(() => {

            setProgress(prev => {

                if (prev >= 100) {

                    clearInterval(progressInterval);

                    clearInterval(messageInterval);

                    setTimeout(() => {

                        finishLoading();

                    }, 800);

                    return 100;

                }

                return prev + 2;

            });

        }, 60);

        return () => {

            clearInterval(progressInterval);

            clearInterval(messageInterval);

        };

    }, []);

    return (

        <div className="h-screen flex flex-col justify-center items-center bg-slate-950">

            <h1 className="text-3xl font-bold text-cyan-400 mb-8">

                {text}

            </h1>

            <div className="w-[450px] h-4 rounded-full bg-slate-800 overflow-hidden">

                <div

                    className="h-full bg-cyan-400 transition-all duration-100"

                    style={{ width: `${progress}%` }}

                ></div>

            </div>

            <p className="mt-5 text-xl text-gray-300">

                {progress}%

            </p>

        </div>

    );

}