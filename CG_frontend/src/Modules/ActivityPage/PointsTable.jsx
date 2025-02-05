import React from 'react'

const PointsTable = () => {
    return (
        <div className="relative h-screen w-full bg-gradient-to-b from-[#0B0E21] to-black flex items-center justify-center p-4">
            <div className="w-full max-w-5xl bg-[#11162b] rounded-xl shadow-lg p-4 overflow">
                <table className="w-full text-left text-white border-separate border-spacing-y-2">
                    <thead>
                        <tr className="bg-gradient-to-b from-[#0B0E21] to-black bg-opacity-10 text-gray-200">
                            <th className="p-3 rounded-l-lg">Activity Date</th>
                            <th className="p-3 max-sm:hidden">Activity Type/Pool</th>
                            <th className="p-3 max-sm:hidden">Organised By</th>
                            <th className="p-3">Team</th>
                            <th className="p-3 rounded-r-lg">Points Acquired</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(4)].map((_, index) => (
                            <tr key={index} className="bg-gradient-to-b from-[#0B0E21] to-black bg-opacity-5">
                                <td className="p-3 flex items-center">
                                    00/22/2005
                                </td>
                                <td className="p-3 max-sm:hidden">Sports/200</td>
                                <td className="p-3 max-sm:hidden">CodingGita</td>
                                <td className="p-3">
                                    Phoenix <br />
                                    Compilers <br />
                                    Invincibles <br />
                                    Trialblazers
                                </td>
                                <td className="p-3">
                                    100 <br />
                                    100 <br />
                                    0 <br />
                                    0
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>)
}

export default PointsTable