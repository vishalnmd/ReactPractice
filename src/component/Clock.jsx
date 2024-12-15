import { useEffect, useState } from "react";

function Clock() {
    const currentDate = new Date();
    
    // Initializing state with real-time values
    const [second, setSecond] = useState(currentDate.getSeconds());
    const [minute, setMinute] = useState(currentDate.getMinutes());
    const [hour, setHour] = useState(currentDate.getHours());

    useEffect(() => {
        const interval = setInterval(() => {
            // Update seconds
            setSecond((prevSecond) => {
                if (prevSecond < 59) {
                    return prevSecond + 1;
                } else {
                    return 0; // Reset seconds to 0
                }
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("unmounted called");
        };
    }, []);

    useEffect(() => {
        // Update minute when seconds reach 0
        if (second === 0) {
            setMinute((prevMinute) => {
                if (prevMinute < 59) {
                    return prevMinute + 1;
                } else {
                    return 0; // Reset minute to 0
                }
            });
        }
    }, [second]); // This effect runs whenever the second value changes

    useEffect(() => {
        // Update hour when minute reaches 0
        if (minute === 0 && second === 0) {
            setHour((prevHour) => {
                if (prevHour < 23) {
                    return prevHour + 1;
                } else {
                    return 0; // Reset hour to 0
                }
            });
        }
    }, [minute, second]); // This effect runs whenever minute or second value changes

    return (
        <>
            <div className="flex my-3.5 shadow-2xl">
                <div className="size-24 m-1 border p-4 border-gray-50 shadow-2xl hover:bg-slate-500">
                    <h1>{hour < 10 ? `0${hour}` : hour}</h1> {/* Formatting hour */}
                </div>

                <div className="size-24 m-1 border p-4 border-gray-100 shadow-2xl hover:bg-slate-500">
                    <h1>{minute < 10 ? `0${minute}` : minute}</h1> {/* Formatting minute */}
                </div>

                <div className="size-24 m-1 border p-4 border-gray-200 shadow-2xl hover:bg-slate-500">
                    <h1>{second < 10 ? `0${second}` : second}</h1> {/* Formatting second */}
                </div>
            </div>
        </>
    );
}

export default Clock;
