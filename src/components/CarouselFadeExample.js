import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Frame_101.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>One Stop Shop For Your PC Needs</h3>
          <p>Increase your FPS and Performance</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Frame_102.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>PERFORMANCE FOR BIG DREAMS</h3>
          <p>
            Imagine a PC that can crush at elite levels today and adapt to reach
            new performance heights tomorrow. Well, this be it.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Frame_100.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>DREAM, ADAPT, OVERCOME</h3>
          <p>
            Experience a new level of performance, blow the doors off today’s
            most demanding next-gen games, and do it with maximum detail, speed,
            and power.{' '}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
