import React from 'react';
import '../../styles/body/first-content.css';
import Event from '../../images/first-content/event.png';
import Idea from '../../images/first-content/idea.png';
import Result from '../../images/first-content/result.png';
import Conversation from '../../images/first-content/conversation.png';


const FirstContent = () => {
    return (
        <div className='first-content'>
            <div className='info--img'>
                <ul>
                    <li><img src={Event} alt="" /><p>Eventos</p></li>
                    <li><img src={Idea} alt="" /><p>Eventos</p></li>
                    <li><img src={Result} alt="" /><p>Eventos</p></li>
                    <li><img src={Conversation} alt="" /><p>Eventos</p></li>
                </ul>
            </div>
            <div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                    Eventos Comunicação
                </p>
            </div>
            <div className='Carousel'>
                
            </div>
        </div>
    );
};

export default FirstContent;