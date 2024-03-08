'use client';
import { Modal } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { FaAws } from "react-icons/fa"
import { SiKubernetes } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMysql, DiRedis } from "react-icons/di";
import { SiRabbitmq } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { IconContext } from "react-icons";
import { BiSolidDetail } from "react-icons/bi";
import { SiCompilerexplorer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiQiskit } from "react-icons/si";
import { IoHardwareChipSharp } from "react-icons/io5";
import ADS from './ADS-Archi.jpeg';

export default function Projects() {

    const [streamcrew, setStreamcrew] = useState(false);
    const [compiler, setCompiler] = useState(false);
    const [quantum, setQuantum] = useState(false);
    const [hecc, setHecc] = useState(false);
    const ref = useRef();

    return (
        <div>
            <div className="pt-5 grid items-center grid-cols-3 gap-4">
                <div className="min-w-32 max-w-96 overflow-hidden dark:bg-gray-700 bg-slate-200 rounded-lg shadow">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stream Crew</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Video streaming platform for sharing the watch experience with friends</p>
                        <a onClick={() => { setStreamcrew(true) }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-700 ">
                            Details
                            <div className="pl-2">
                                <BiSolidDetail />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="min-w-32 max-w-96 overflow-hidden dark:bg-gray-700 bg-slate-200 rounded-lg shadow">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The L compiler</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Simple yet composed compiler for the L programming language</p>
                        <a onClick={() => { setCompiler(true) }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-700">
                            Details
                            <div className="pl-2">
                                <BiSolidDetail />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="min-w-32 max-w-96 overflow-hidden dark:bg-gray-700 bg-slate-200 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quantum Discrete Logarithm</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantum Implementation of the infamous mathematical Discrete Logarithm</p>
                        <a onClick={() => { setQuantum(true) }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-700">
                            Details
                            <div className="pl-2">
                                <BiSolidDetail />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="min-w-32 max-w-96 overflow-hidden dark:bg-gray-700 bg-slate-200 rounded-lg shadow ">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biometric Template protection</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Template Protection using Hyper-Elliptic cryptosystems</p>
                        <div className="flex flex-row gap-2 place-content-between">
                            <a onClick={() => { setHecc(true) }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-700">
                                Details
                                <div className="pl-2">
                                    <BiSolidDetail />
                                </div>
                            </a>
                            <p className="animate-pulse dark:text-red-700 text-red-500">
                                Published
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={streamcrew} size={"6xl"} className="backdrop-blur" onClose={() => setStreamcrew(false)}>
                <Modal.Header>
                    <div className="flex flex-row">
                        <p>Stream Crew</p>
                        <a href="https://github.com/bhushankhope/StreamCrew?tab=readme-ov-file" className="px-3 focus:outline-none py-2 text-xs font-medium text-blue-400  hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                            Read more
                        </a>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
                            Video Streaming Platform to share watch experience with friends. Similar to netflix, this platform allows users to watch media in a shared session
                            where data is streamed at once, with any user having the ability to play,pause or end the session.
                        </p>
                        <div className="text-base pb-2 leading-relaxed text-slate-500 dark:text-slate-400">
                            <p className=""> Technical Specifications - </p>
                            <ul className="list-disc list-inside pl-10">
                                <li> The platform is built to support 10 users per session, with more than 1000 rps service capability</li>
                                <li> The service is engineered with high availability - distributed across multiple regions with disaster recovery strategies.</li>
                                <li> Deployed at Edge for faster response times - the services takes advantage of the edge technologies for a more seemless user experience.</li>
                            </ul>
                        </div>
                        <div className="text-base pb-2 leading-relaxed text-slate-500 dark:text-slate-500">
                            <div className="flex justify-center">
                                <div className="rounded overflow-hidden shadow-lg">
                                    <div className="px-6 pt-4 w-fit pb-2 h-30 rounded-md">
                                        <IconContext.Provider value={{ className: "shared-class", size: "50" }}>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaAws /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><SiKubernetes /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaAngular /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaPython /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><DiRedis /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><SiMysql /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><SiRabbitmq /></span>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={compiler} size={"6xl"} className="backdrop-blur" onClose={() => setCompiler(false)}>
                <Modal.Header>
                    <div className="flex flex-row">
                        <p>The L compiler</p>
                        <a href="https://github.com/bhushankhope/StreamCrew?tab=readme-ov-file" className="px-3 py-2 focus:outline-none text-xs font-medium text-blue-400  hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                            Read more
                        </a>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
                            Fun experiment on building a compiler for a static language - L, with trivial functions, yet implements powerful techniques to have optimal compilation.
                        </p>
                        <div className="text-base pb-2 leading-relaxed text-slate-500 dark:text-slate-400">
                            <p className=""> Technical Specifications - </p>
                            <ul className="list-disc list-inside pl-10">
                                <li><span className="font-medium text-slate-600 dark:text-slate-300">Trivial Datatypes Support: </span>The compiler efficiently handles trivial datatypes such as integers, booleans, and floating-point numbers, ensuring accurate representation and computation.</li>
                                <li><span className="font-medium text-slate-600 dark:text-slate-300">Mathematical Computations: </span>It supports a wide range of mathematical computations including addition, subtraction, and multiplication, providing robust functionality for arithmetic operations.</li>
                                <li> <span className="font-medium text-slate-600 dark:text-slate-300">Datatype Support: </span>The compiler is capable of handling complex datatypes including arrays, lists, tuples, functions, and lambda expressions, facilitating diverse programming paradigms and data structures.</li>
                                <li> <span className="font-medium text-slate-600 dark:text-slate-300">Optimization Techniques:  </span>Implements advanced optimization techniques such as constant variable propagation, which efficiently replaces variables with their constant values throughout the program, reducing redundant computations and enhancing runtime efficiency.</li>
                                <li> <span className="font-medium text-slate-600 dark:text-slate-300">Error Handling:   </span>Provides comprehensive error handling mechanisms to detect and report syntax errors, semantic errors, and runtime errors, ensuring robustness and reliability of compiled programs.</li>
                            </ul>
                        </div>
                        <div className="text-base pb-2 leading-relaxed text-gray-500 dark:text-gray-500">
                            <div className="flex justify-center">
                                <div className="rounded overflow-hidden shadow-lg">
                                    <div className="px-6 pt-4 w-fit pb-2 h-30 rounded-md">
                                        <IconContext.Provider value={{ className: "shared-class", size: "50" }}>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaPython /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><SiCompilerexplorer /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaGithub /></span>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={quantum} size={"6xl"} className="backdrop-blur" onClose={() => setQuantum(false)}>
                <Modal.Header>
                    <div className="flex flex-row">
                        <p>Quantum Discrete Logarithm</p>
                        <a href="https://github.com/archananarayanan/DiscreteLog-MoscaEkert" className="px-3 py-2 focus:outline-none text-xs font-medium text-blue-400  hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                            Read more
                        </a>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
                            Quantum implementation of the famous Discrete Logarithm algorithm - the conventional methods of this algorithm the de-facto security standard that is utilised in multiple encryption algorithms used across the web.
                        </p>
                        <div className="text-base pb-2 leading-relaxed text-slate-500 dark:text-slate-400">
                            <p className=""> Technical Specifications - </p>
                            <ul className="list-disc list-inside pl-10">
                                <li>Developed quantum circuits based on the discrete algorithms outlined in <span className="text-blue-500 dark:text-blue-600"><a href="https://arxiv.org/pdf/quant-ph/9903071.pdf">Discrete Logarithm</a></span>, which includes operations such as quantum gates, superposition, entanglement, and measurement.</li>
                                <li>Implemented various quantum gates required for the algorithm, such as the Hadamard gate, controlled-NOT gate, phase gate, and others, using techniques compatible with available quantum hardware or simulators.</li>
                                <li> Implement error correction and mitigation techniques to address noise and errors inherent in quantum hardware or simulators, ensuring the reliability and accuracy of computation results.</li>
                            </ul>
                        </div>
                        <div className="text-base pb-2 leading-relaxed text-gray-500 dark:text-gray-500">
                            <div className="flex justify-center">
                                <div className="rounded overflow-hidden shadow-lg">
                                    <div className="px-6 pt-4 w-fit pb-2 h-30 rounded-md">
                                        <IconContext.Provider value={{ className: "shared-class", size: "50" }}>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaPython /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><SiQiskit /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaGithub /></span>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={hecc} size={"6xl"} className="backdrop-blur" onClose={() => setHecc(false)}>
                <Modal.Header>
                    <div className="flex flex-row">
                        <p>Biometric template protection</p>
                        <a href="https://link.springer.com/article/10.1007/s11042-019-7208-1" className="animate-pulse focus:outline-none px-3 py-2 text-xs font-medium text-red-400  hover:text-red-800 dark:text-red-500 dark:hover:text-red-700">
                            Read more
                        </a>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
                            Introduces a template protection scheme utilizing genus-2 hyperelliptic curves, offering robustness against potential attacks while maintaining computational efficiency.
                        </p>
                        <div className="text-base pb-2 leading-relaxed text-slate-500 dark:text-slate-400">
                            <p className=""> Technical Specifications - </p>
                            <ul className="list-disc list-inside pl-10">
                                <li><span className="font-medium text-slate-600 dark:text-slate-300">Genus-2 Hyperelliptic Curve: </span>Implementation involves the utilization of genus-2 hyperelliptic curves as the mathematical foundation for the template protection scheme.</li>
                                <li><span className="font-medium text-slate-600 dark:text-slate-300">Template Protection Scheme: </span>The proposed template protection scheme involves translating the theoretical concepts into practical algorithms and procedures. This includes developing algorithms for template encryption, decryption, and authentication.</li>
                                <li> <span className="font-medium text-slate-600 dark:text-slate-300">Security Measures: </span>Implementation ensures robust security against various types of attacks, including cryptographic attacks and biometric recognition attacks - incorporating cryptographic primitives and measures to enhance security.</li>
                                <li> <span className="font-medium text-slate-600 dark:text-slate-300">Hardware Acceleration  </span>Implemented hardware-accelerated cryptographic primitives tailored for genus-2 hyperelliptic curves to enhance performance on specialized hardware platforms like FPGAs or ASICs.</li>
                                <li> <span className="font-medium text-slate-600 dark:text-slate-300">Biometric System Interface: </span>Developed APIs and interfaces to seamlessly integrate the template protection scheme with existing or new biometric authentication systems that utilize speech biometrics.</li>

                            </ul>
                        </div>
                        <div className="text-base pb-2 leading-relaxed text-gray-500 dark:text-gray-500">
                            <div className="flex justify-center">
                                <div className="rounded overflow-hidden shadow-lg">
                                    <div className="px-6 pt-4 w-fit pb-2 h-30 rounded-md">
                                        <IconContext.Provider value={{ className: "shared-class", size: "50" }}>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><IoHardwareChipSharp /></span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M495.855 367.604c-28.98-73.177-53.037-148.231-80.725-221.893c-12.23-31.362-24.198-62.986-40.868-92.33c-6.62-10.535-12.956-22.119-23.814-28.86c-2.739-1.74-5.828-2.479-8.88-2.42c-5.084.096-10.14 2.37-14.025 5.65c-14.571 11.543-23.209 28.334-32.896 43.793c-17.114 28.698-35.156 58.748-63.773 77.396c-13.44 9.485-31.039 10.514-43.995 20.686c-17.72 13.36-29.767 32.31-44.298 48.737c-3.31 3.956-8.436 5.53-12.916 7.67C86.315 243.71 42.945 261.35 0 279.916c36.367 28.132 75.115 53.157 112.208 80.321c10.172-2.018 20.383-6.196 30.877-4.339c16.63 5.207 26.377 21.15 34.006 35.721c15.5 31.765 26.7 65.307 39.253 98.283c20.988-1.493 39.878-12.31 56.104-25.025c31.24-25.307 55.034-58.001 81.23-88.192c12.552-13.199 25.347-28.92 44.197-32.593c19.05-4.601 39.454 2.22 53.581 15.338c19.818 17.719 37.376 38.203 60.544 51.765c-3.108-15.338-10.575-29.101-16.145-43.592M171.844 316.04c-18.284 10.817-37.699 19.717-56.71 29.162c-29.828-19.98-58.889-41.15-88.192-61.856c39.515-17.315 79.635-33.4 119.675-49.545c18.97 14.813 38.547 28.88 57.517 43.693c-8.92 14.248-19.657 27.487-32.29 38.546m40.665-49.646c-18.85-14.167-37.94-27.951-56.508-42.482c11.907-16.226 24.945-31.906 40.565-44.701c10.333-6.62 22.966-8.456 33.703-14.43c25.469-12.714 42.845-36.044 59.434-58.324c-21.271 55.216-43.975 110.654-77.194 159.937" />
                                                </svg>
                                            </span>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

