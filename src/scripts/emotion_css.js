import { css } from '@emotion/css';

window.addEventListener("DOMContentLoaded", () => {
    const pxToRem = (px, base = 16) => `${px / base}rem`;

    const heroIntroCss = css`
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 100vh;
        padding: ${pxToRem(48)};
        background-color: #fff;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        @media (max-width: 768px) {
            padding: ${pxToRem(48)} 0;
        }
    `;

    const heroIntroTitleCss = css`
        font-weight: 700;
        font-size: ${pxToRem(72)};
        line-height: 1.25;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #fff;
        span, mark {
          color: #71c575;
          background-color: transparent;
        }
        @media (max-width: 767px) {
            font-size: ${pxToRem(36)};
        }
    `;

    const aboutCompanyCss = css`
        position: sticky;
        top: 0;
        overflow: hidden;
        min-height: 100vh;
    `;
    const aboutCompanyTitleCss = css`
        padding: ${pxToRem(48)};
        font-weight: 700;
        font-size: ${pxToRem(40)};
        line-height: 150%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #000;
        @media (max-width: 1199px) {
          padding: ${pxToRem(48)} 0 0;
        }
        @media (max-width: 767px) {
          font-size: ${pxToRem(28)};
        }
    `;
    const aboutCompanyWrapperCss = css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media (max-width: 1199px) {
          grid-template-columns: 1fr;
        }
    `;
    const aboutCompanyPictureCss = css`
        padding: ${pxToRem(48)};
        font-size: 0;
        @media (max-width: 1199px) {
          padding: ${pxToRem(24)} 0;
        }
        img {
          width: 100%;
          transform: scale(5);
        }
    `;
    const aboutCompanyMainCss = css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: ${pxToRem(48)};
        border-left: ${pxToRem(1)} solid #ccc;
        @media (max-width: 1199px) {
          padding: ${pxToRem(24)} 0;
          border-left: none;
          border-top: ${pxToRem(1)} solid #ccc;
        }
    `;
    const aboutCompanyCountCss = css`
        font-weight: 900;
        font-size: ${pxToRem(80)};
        line-height: 125%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #71c575;
        @media (max-width: 767px) {
          font-size: ${pxToRem(48)};
        }
    `;
    const aboutCompanyAboutCss = css`
        font-weight: 400;
        font-size: ${pxToRem(16)};
        line-height: 150%;
        letter-spacing: -0.02em;
        color: #000;
        @media (max-width: 767px) {
          margin-top: ${pxToRem(24)};
        }
        p,ul,ol,table,blockquote{
          margin-bottom: ${pxToRem(15)};
        }
        ul,ol{
          padding-left: ${pxToRem(24)};
        }
        *:last-child {
          margin-bottom: 0;
        }
    `;
    const aboutCompanyMaskCss = css`
        position: absolute;
        inset: 0;
        display: flex;
        align-items: flex-end;
        padding: ${pxToRem(48)};
        width: 100%;
        height: 100vh;
        z-index: 10;
        pointer-events: none;
    `;

    const heroIntro = document.querySelector('.hero-intro');
    const heroIntroTitle = document.querySelector('.hero-intro__title');
    const aboutCompany = document.querySelector('.about-company');
    const aboutCompanyTitle = document.querySelector('.about-company__title');
    const aboutCompanyWrapper = document.querySelector('.about-company__wrapper');
    const aboutCompanyPicture = document.querySelector('.about-company__picture');
    const aboutCompanyMain = document.querySelector('.about-company__main');
    const aboutCompanyCount = document.querySelector('.about-company__count');
    const aboutCompanyAbout = document.querySelector('.about-company__about');
    const aboutCompanyMask = document.querySelector('.about-company__mask');
    if (heroIntro) heroIntro.className = heroIntroCss;
    heroIntroTitle.className = heroIntroTitleCss;
    aboutCompany.className = aboutCompanyCss;
    aboutCompanyTitle.className = aboutCompanyTitleCss;
    aboutCompanyWrapper.className = aboutCompanyWrapperCss;
    aboutCompanyPicture.className = aboutCompanyPictureCss;
    aboutCompanyMain.className = aboutCompanyMainCss;
    aboutCompanyCount.className = aboutCompanyCountCss;
    aboutCompanyAbout.className = aboutCompanyAboutCss;
    aboutCompanyMask.className = aboutCompanyMaskCss;
});