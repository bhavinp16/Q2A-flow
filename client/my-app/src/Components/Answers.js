import React from 'react'
import AddAnsFooter from './AddAnsFooter'
import Anstabquestion from './Anstabquestion'
import Answer from './Answer'


function Answers() {
    return (
        <div className="flex flex-col w-3/4 bg-gray-100 mt-16 justify-between">
            <Anstabquestion />
            <div className="flex-col overflow-y-scroll">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
            <AddAnsFooter />
        </div>
    )
}

export default Answers
