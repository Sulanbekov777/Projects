import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button,
    Container,
} from 'reactstrap';
import Photo1 from '../assets/images/photo1.jpg'
import Photo2 from '../assets/images/photo2.jpg'
import Photo3 from '../assets/images/photo3.jpg'
import { useHistory } from 'react-router-dom';





const HomeCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const history = useHistory()

    const items = [
        {
            src: Photo2,
            comment: <p className="HomeCarouselCommentFirst">Supercars</p>,
            caption: <Button onClick = {() => history.replace("/?page=1")} onClick = {() => history.replace("/?page=1")} className="HomeCarouselButtonFirst">Get started</Button>
        },
        {
            src: Photo1,
            comment: <p className="HomeCarouselCommentSecond">Comfortable</p>,
            caption: <Button onClick = {() => history.replace("/?page=2")} className="HomeCarouselButtonSecond">Buy right now</Button>
        },
        {
            src: Photo3,
            comment: <p className="HomeCarouselCommentThird">Fast</p>,
            caption: <Button onClick = {() => history.replace("/?page=3")} className="HomeCarouselButtonThird">View details</Button>
        }
    ];


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption className="mb-1 text-center" captionText={item.caption} captionHeader={item.comment} />
            </CarouselItem>
        );
    });

    return (
        <div className="HomeMainDiv">
            {/* Carousel */}
            <Container>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </Container>
        </div>
    );
}

export default HomeCarousel;