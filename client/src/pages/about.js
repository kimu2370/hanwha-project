import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import CommonLayout from 'components/Layout/CommonLayout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    accessibility: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
};

const about = () => {
    return (
        <CommonLayout>
            <Section>
                <Box>
                    <H1>안녕하세요. 이곳은 about 페이지입니다.</H1>
                    <Paragraph>
                        {`프론트엔드 영역에서 개발을 하고 있습니다.\n오늘의 기록이 내일의 성장이 된다고 믿습니다.`
                            .split('\n')
                            .map((text, i) => (
                                <span key={i}>
                                    {text}
                                    <br />
                                </span>
                            ))}
                    </Paragraph>
                </Box>
                <Img src="./img/img1.png" />
            </Section>
            <Section card>
                <H1 spacing={'spacing'}>PORTFOLIO</H1>
                <div>
                    <StyledSlider {...settings}>
                        {/* mock up data */}
                        <CardBox>
                            <CardImg src="https://media.vlpt.us/images/hyundong_kk/post/d44d940d-344b-4bcf-8980-52b66265add2/Ekran-Resmi-2019-11-18-18.08.13.png" />
                            <CardBody>
                                <H5>React.js</H5>
                                <Text>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</Text>
                            </CardBody>
                        </CardBox>
                        <CardBox>
                            <CardImg src="https://media.vlpt.us/images/hyundong_kk/post/d44d940d-344b-4bcf-8980-52b66265add2/Ekran-Resmi-2019-11-18-18.08.13.png" />
                            <CardBody>
                                <H5>React.js</H5>
                                <Text>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</Text>
                            </CardBody>
                        </CardBox>
                        <CardBox>
                            <CardImg src="https://media.vlpt.us/images/hyundong_kk/post/d44d940d-344b-4bcf-8980-52b66265add2/Ekran-Resmi-2019-11-18-18.08.13.png" />
                            <CardBody>
                                <H5>React.js</H5>
                                <Text>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</Text>
                            </CardBody>
                        </CardBox>
                        <CardBox>
                            <CardImg src="https://media.vlpt.us/images/hyundong_kk/post/d44d940d-344b-4bcf-8980-52b66265add2/Ekran-Resmi-2019-11-18-18.08.13.png" />
                            <CardBody>
                                <H5>React.js</H5>
                                <Text>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</Text>
                            </CardBody>
                        </CardBox>
                    </StyledSlider>
                </div>
            </Section>
        </CommonLayout>
    );
};

export default about;

const Section = styled.section`
    display: flex;
    justify-content: space-between;

    max-width: 1180px;
    width: 100%;
    margin-top: 3rem;
    ${p =>
        p.card &&
        `
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    `}
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledSlider = styled(Slider)`
    text-align: center;

    .slick-prev {
        left: -50px;
    }

    .slick-next {
        right: -50px;
    }

    .slick-prev:before,
    .slick-next:before {
        color: black;
        font-size: 40px;
    }

    .slick-center {
        transition: transform 300ms;
    }
`;

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
`;

const CardImg = styled.img.attrs(() => ({
    alt: 'image',
}))`
    width: 100%;
`;

const CardBody = styled.div`
    padding: 1.25rem;
    background-color: #e4e7ed;
`;

const H1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 2rem;
    ${p =>
        p.spacing &&
        `
        letter-spacing: 2px;
    `};
`;

const H5 = styled.h5`
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;

    margin-bottom: 0.75rem;
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.5;
    :before {
        display: block;
        font-size: 3.5rem;
        content: '🧑🏻‍💻';
    }
`;

const Text = styled.span`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`;

const Img = styled.img.attrs(() => ({
    alt: 'image',
}))`
    width: 500px;
`;
