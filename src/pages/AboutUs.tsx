import React from "react";
import { jarallax, jarallaxVideo } from "jarallax";
import styled from "styled-components/macro";

const AboutUsStyles = styled.div`
  .jarallax {
    min-height: 50vh;
  }

  .jarallax-wrap {
    position: relative;
    background-color: #e4e4e6;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;

    // jarallax will use position: absolute and we can add border radius to images
    transform: translateX(0);
  }

  .jarallax-controls {
    padding: 20px;
  }

  .jarallax-remove-btn {
  }
`;

export default () => {
  jarallaxVideo();
  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.5,
    videoSrc: "mp4:/video/Blue B 01.mp4",
  });
  return (
    <AboutUsStyles>
      <div className="jarallax">
        <video loop autoPlay>
          <source src="/video/Blue B 01.mp4" type="video/mp4" />
        </video>
        {/* <p className="about-us-title" data-aos="fade-in" data-aos-duration="2000">{% t about-us.title %}</p>
            <p className="about-us-content">{% t about-us.one %}</p>
            <p className="about-us-content">{% t about-us.two %}</p>
            <p id="about-us-last" className="about-us-content">{% t about-us.three %}</p> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
          vestibulum nulla. Integer non justo volutpat, bibendum dolor non,
          accumsan lectus. Sed quis risus tortor. Maecenas ligula nunc,
          pellentesque vitae tincidunt eget, aliquam ut nisl. Mauris volutpat
          dictum vestibulum. Mauris volutpat ac sem vitae consectetur. Nam non
          urna ut mi vulputate ultrices. Curabitur enim ligula, venenatis eget
          scelerisque eget, venenatis ut leo. Sed pellentesque ipsum a nisl
          imperdiet, ac gravida tellus consectetur. Pellentesque viverra, arcu a
          dapibus tincidunt, elit magna vulputate ante, sed pellentesque ligula
          nisl eu leo. Vivamus mi augue, vehicula id arcu vitae, mattis luctus
          eros. Aliquam quam eros, ultrices et commodo sit amet, dignissim non
          leo. Pellentesque urna massa, lacinia quis quam vel, volutpat
          tincidunt lorem. Integer ligula augue, ullamcorper vitae ligula et,
          vulputate varius est. Quisque ut interdum leo. In maximus turpis sit
          amet vestibulum efficitur. Maecenas metus ante, vestibulum vitae
          mauris eget, tempus aliquet mi. Integer felis ipsum, bibendum in sem
          non, hendrerit bibendum nisi. Integer viverra ipsum id ante facilisis
          congue. Ut blandit pulvinar mi in aliquam. Duis rutrum massa quis sem
          pellentesque, sit amet dictum nisi vestibulum. Cras non varius dui.
          Maecenas a ex dui. Nullam pharetra nunc quis lectus lobortis, blandit
          efficitur lectus volutpat. Nullam et tortor fermentum, dictum lorem
          in, scelerisque ipsum. Aenean tempus dui a rutrum malesuada. Nulla
          facilisi. Donec pulvinar posuere risus, a gravida mauris suscipit
          eleifend. Quisque congue volutpat risus a elementum. Etiam pulvinar
          odio sed convallis dignissim. Aliquam suscipit urna non ligula
          fringilla, at mattis arcu egestas. Morbi tristique massa ligula, quis
          fringilla lacus laoreet vitae. Aliquam fringilla congue turpis non
          interdum. Quisque fermentum, urna sit amet viverra mollis, metus
          turpis pellentesque erat, sollicitudin sagittis lacus urna et justo.
          Integer id magna eu nunc porta vehicula ac vel turpis. Nunc imperdiet
          dictum turpis eu molestie. Sed a neque ultricies, lobortis turpis in,
          euismod enim. Mauris vitae dapibus odio, non sagittis mi. Sed nec
          neque luctus, scelerisque augue quis, condimentum erat. Nullam nec
          augue non ligula facilisis varius in eget nisl. Sed hendrerit sapien
          ac lectus egestas, porta pharetra est porta. Aliquam eget lacus lorem.
          Sed ultrices lacus nulla, eu pharetra massa sodales at. Proin
          fermentum metus et massa auctor rutrum. Sed eget lobortis justo. Etiam
          faucibus nibh turpis, eu imperdiet ipsum tincidunt quis. Integer
          consequat leo sit amet neque tempus, eu accumsan tellus maximus.
          Integer suscipit dolor non sapien imperdiet dapibus. Cras lacinia vel
          nibh sed auctor. Donec scelerisque eros mi, a aliquam tortor malesuada
          varius.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
          vestibulum nulla. Integer non justo volutpat, bibendum dolor non,
          accumsan lectus. Sed quis risus tortor. Maecenas ligula nunc,
          pellentesque vitae tincidunt eget, aliquam ut nisl. Mauris volutpat
          dictum vestibulum. Mauris volutpat ac sem vitae consectetur. Nam non
          urna ut mi vulputate ultrices. Curabitur enim ligula, venenatis eget
          scelerisque eget, venenatis ut leo. Sed pellentesque ipsum a nisl
          imperdiet, ac gravida tellus consectetur. Pellentesque viverra, arcu a
          dapibus tincidunt, elit magna vulputate ante, sed pellentesque ligula
          nisl eu leo. Vivamus mi augue, vehicula id arcu vitae, mattis luctus
          eros. Aliquam quam eros, ultrices et commodo sit amet, dignissim non
          leo. Pellentesque urna massa, lacinia quis quam vel, volutpat
          tincidunt lorem. Integer ligula augue, ullamcorper vitae ligula et,
          vulputate varius est. Quisque ut interdum leo. In maximus turpis sit
          amet vestibulum efficitur. Maecenas metus ante, vestibulum vitae
          mauris eget, tempus aliquet mi. Integer felis ipsum, bibendum in sem
          non, hendrerit bibendum nisi. Integer viverra ipsum id ante facilisis
          congue. Ut blandit pulvinar mi in aliquam. Duis rutrum massa quis sem
          pellentesque, sit amet dictum nisi vestibulum. Cras non varius dui.
          Maecenas a ex dui. Nullam pharetra nunc quis lectus lobortis, blandit
          efficitur lectus volutpat. Nullam et tortor fermentum, dictum lorem
          in, scelerisque ipsum. Aenean tempus dui a rutrum malesuada. Nulla
          facilisi. Donec pulvinar posuere risus, a gravida mauris suscipit
          eleifend. Quisque congue volutpat risus a elementum. Etiam pulvinar
          odio sed convallis dignissim. Aliquam suscipit urna non ligula
          fringilla, at mattis arcu egestas. Morbi tristique massa ligula, quis
          fringilla lacus laoreet vitae. Aliquam fringilla congue turpis non
          interdum. Quisque fermentum, urna sit amet viverra mollis, metus
          turpis pellentesque erat, sollicitudin sagittis lacus urna et justo.
          Integer id magna eu nunc porta vehicula ac vel turpis. Nunc imperdiet
          dictum turpis eu molestie. Sed a neque ultricies, lobortis turpis in,
          euismod enim. Mauris vitae dapibus odio, non sagittis mi. Sed nec
          neque luctus, scelerisque augue quis, condimentum erat. Nullam nec
          augue non ligula facilisis varius in eget nisl. Sed hendrerit sapien
          ac lectus egestas, porta pharetra est porta. Aliquam eget lacus lorem.
          Sed ultrices lacus nulla, eu pharetra massa sodales at. Proin
          fermentum metus et massa auctor rutrum. Sed eget lobortis justo. Etiam
          faucibus nibh turpis, eu imperdiet ipsum tincidunt quis. Integer
          consequat leo sit amet neque tempus, eu accumsan tellus maximus.
          Integer suscipit dolor non sapien imperdiet dapibus. Cras lacinia vel
          nibh sed auctor. Donec scelerisque eros mi, a aliquam tortor malesuada
          varius.
        </p>
      </div>
    </AboutUsStyles>
  );
};
