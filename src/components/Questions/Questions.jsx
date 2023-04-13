import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='container'>
            <h4 className='text-center border-bottom m-2'>Frequently Asked Questions with Answers</h4>
            <div className='row m-4'>
                <div className='col col-md-3'>
                    <h5>1.Props vs state</h5>
                    <h5>Answer: Props are a way of passing data from a parent component to a child component. Props are read only and it cannot be modified. On the other hand, state is used to manage data that can be changed any time. State is used to manage data that changes within a component.</h5>
                </div>
                <div className='col col-md-3'>
                    <h5>2.How does useState work?</h5>
                    <h5>Answer: useState is a built in react hook. The useState hook returns an array with two elements : current state value and a function to update the state value.</h5>
                </div>
                <div className='col col-md-3'>
                    <h5>3.Purpose of useEffect other than fetching data.</h5>
                    <h5>Answer: We can use useEffect to optimize the performance of a component by avoiding unnecessary re-renders.As well as we can use it to change a title based on the current state of the component.</h5>
                </div>
                <div className='col col-md-3'>
                    <h5>4.How Does React work?</h5>
                    <h5>Answer: React is a Javascript Library for building interface. It allows developers to to create reusable UI components and provides a way of manage the state of those components.React uses a virtual DOM to manage updates the user interface. Because virtual DOM is much lighter than real DOM.React components are reusable. React uses JSX and by using this JSX, developer can write HTML like code.React also provide event handler for user interaction.React uses one way data flow that means parent can give data to his children but childer can not give any data to his parent.React provide a way to manage the lifecycle of a component using lifecycle method. </h5>
                </div>

            </div>
        </div>
    );
};

export default Questions;