import Image from 'next/image';

export default function SkillsPage() {
    return (
        <div className='w-full lg:h-screen p-2 py-36'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-cetner h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src='/c++.png' 
                                    width='64' 
                                    height='64'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C++</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src='/javascript.png' 
                                    width='64' 
                                    height='64'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src='/react.png' 
                                    width='64' 
                                    height='64'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src='/nextjs.png' 
                                    width='64' 
                                    height='64'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NextJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src='/css.png' 
                                    width='64' 
                                    height='64'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src='/html.png' 
                                    width='64' 
                                    height='64'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src='/tailwind.png' 
                                    width='64' 
                                    height='64'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src='/github.png' 
                                    width='64' 
                                    height='64'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}