import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {

    const textToSpeach=(text)=>{
         //speechSynthesis property is available in the window object, which indicates that the browser supports the Speech Synthesis API.
        if('speechSynthesis' in window){
            //SpeechSynthesisUtterance is an object that represents a speech request.
            // It contains the text to be spoken and additional properties such as language, pitch, and rate.
            const speech= new SpeechSynthesisUtterance(text);
            // speak is a method of the speechSynthesis object to speak the text represented by the speech object.
            window.speechSynthesis.speak(speech)
        }else{
            alert('Sorry, Your browser does not support text to speech')
        }
    }
  return mockInterviewQuestion&&(
    <div className='p-5 border rounded-lg my-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => (
                <h2 
                    key={index}
                    className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer
                    ${activeQuestionIndex === index 
                        ? 'bg-blue-100 text-black' 
                        : 'bg-secondary text-black'
                    }`}
                >
                    Question {index + 1}
                </h2>
            ))}
        </div>
        <h2 className='my-5 text-m md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>  
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)} />
        <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
            <h2 className='flex gap-2 items-center text-primary'>
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
        </div>
    </div>
  )
}

export default QuestionsSection
