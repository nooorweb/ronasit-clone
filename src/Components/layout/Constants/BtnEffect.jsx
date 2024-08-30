import { useEffect } from 'react';
import gsap from 'gsap';

const useButtonEffect = (buttonRef) => {
  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (event) => {
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const deltaX = mouseX - buttonCenterX;
      const deltaY = mouseY - buttonCenterY;

      gsap.to(button, {
        duration: 0.3,
        x: deltaX / 6,
        y: deltaY / 6,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        duration: 0.3,
        x: 0,
        y: 0,
        ease: 'power3.out',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [buttonRef]);
};

export default useButtonEffect;
