// // @flow

// import React, { memo, useState } from 'react';
// // import Header from '../Header';
// import Footer from '../Footer';

// type Props = {
//   children: any,
//   isShowHeader?: boolean,
//   isShowFooter?: boolean,
//   titleHeader?: string,
//   customClassHeader?: string,
//   activePage?: number,
//   icoBackWhite?: boolean,
//   customClass?: string,
//   clickIcoMenu?: Function,
//   isMarginBottom?: boolean,
//   isShowHeaderMain?: boolean,
//   fontWeight?: string,
//   isLink?: boolean,
//   isShowIconBackFunction?: boolean,
//   iconBackFunction?: Function,
// };

// // type RefObject = {
// //   current: any,
// // };

// const MainLayout = ({
//   children,
//   isShowHeader = false,
//   isShowFooter = false,
//   titleHeader = '',
//   customClassHeader = '',
//   customClass = '',
//   activePage = 1,
//   icoBackWhite = false,
//   clickIcoMenu = () => {},
//   isMarginBottom = false,
//   isShowHeaderMain = false,
//   fontWeight = '',
//   isLink = false,
//   isShowIconBackFunction = false,
//   iconBackFunction = () => {},
// }: Props) => {
//   const [activeTab, setActiveTab] = useState(activePage);
//   // const containerRef: RefObject = useRef(null);
//   // useEffect(() => {
//   //   if (window.location.pathname !== '/') {
//   //     if (containerRef && containerRef.current) {
//   //       containerRef.current.scrollTo(0, 0);
//   //     }
//   //   }
//   // });

//   return (
//     <div
//       className={`${isShowFooter ? 'mb-80' : ''}  ${
//         isMarginBottom ? 'mb-80' : ''
//       } ${customClass}`}
//       // ref={containerRef}
//     >
//       {isShowHeader && ( // isShowHeader = false is hide header
//         <Header
//           title={titleHeader} // name of title
//           customClassHeader={customClassHeader}
//           icoBackWhite={icoBackWhite} // icoBlack = true is show icon back
//           clickIcoMenu={clickIcoMenu} // function if click icoBlack ()
//           isShowHeaderMain={isShowHeaderMain} // isShowHeaderMain = true is show header main
//           isLink={isLink}
//           isShowIcon
//           fontWeight={fontWeight}
//           isShowIconBackFunction={isShowIconBackFunction}
//           iconBackFunction={iconBackFunction}
//         />
//       )}
//       {children}

//       {isShowFooter && (
//         <Footer
//           onChangeTab={(tab) => {
//             setActiveTab(tab.key);
//           }}
//           activeTab={activeTab} // number tab active
//         />
//       )}
//     </div>
//     // example
//     // <MainLayout
//     //     isShowFooter
//     //     isShowHeader
//     //     titleHeader="사용내역"
//     //     customClassHeader="white"
//     //     activePage={1}
//     //     icoBackWhite
//     //     isShowHeaderMain
//     //   >
//     // {children}
//     // </MainLayout>
//   );
// };

// MainLayout.defaultProps = {
//   isShowHeader: false,
//   isShowFooter: false,
//   titleHeader: '',
//   customClassHeader: '',
//   activePage: 1,
//   icoBackWhite: false,
//   customClass: '',
//   clickIcoMenu: () => {},
//   isMarginBottom: false,
//   isShowHeaderMain: false,
//   fontWeight: '',
//   isLink: false,
//   isShowIconBackFunction: false,
//   iconBackFunction: () => {},
// };
// export default memo<Props>(MainLayout);
