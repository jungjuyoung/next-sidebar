'use client';
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards
} from 'lucide-react';
import SidebarItem from './item';

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: '관리자관리',
    path: '/manager/account',
    icon: LayoutDashboard,
    items: [
      {
        name: '메뉴관리',
        path: '/manager/menu'
      },
      {
        name: '계정관리',
        path: '/manager/account'
      },
      {
        name: '권한관리',
        path: '/manager/authority'
      },
      {
        name: '접근관리',
        path: '/manager/access'
      },
      {
        name: '로그관리',
        path: '/manager/log'
      }
    ]
  },
  {
    name: '시스템관리',
    path: '/system/company',
    icon: BadgeDollarSign,
    items: [
      {
        name: '업체관리',
        path: '/system/company'
      },
      { name: '사이트관리', path: '/system/site' },
      { name: '모듈관리', path: '/system/module' },
      { name: '시스템코드관리', path: '/system/code' }
    ]
  },
  {
    name: '홈페이지관리',
    path: '/homepage/banner',
    icon: WalletCards,
    items: [
      { name: '배너관리', path: '/homepage/banner' },
      { name: '팝업관리', path: '/homepage/popup' },
      { name: '협력업체관리', path: '/homepage/partners' },
      { name: '패밀리사이트관리', path: '/homepage/familySite' }
      // {name:"FAQ", path:"/homepage/faq"},
    ]
  },
  {
    name: '전시관리',
    path: '/exhibitionMgmt/classMgmt',
    icon: CircleUserRound,
    items: [
      { name: '전시분류관리', path: '/exhibitionMgmt/classMgmt' },
      { name: '전시정보관리', path: '/exhibitionMgmt/infoMgmt' }
    ]
  },
  {
    name: '운영관리',
    path: '/operateMgmt/menu',
    icon: Settings,
    items: [
      {
        name: '메뉴관리',
        path: '/operateMgmt/menu'
      },
      {
        name: '컨텐츠관리',
        path: '/operateMgmt/contents'
      },
      {
        name: '공통파일',
        path: '/operateMgmt/commonFile'
      },
      {
        name: '제휴관리',
        path: '/operateMgmt/alliance'
      }
    ]
  },
  {
    name: '게시판관리',
    path: '/boardMgmt/board',
    icon: Settings,
    items: [
      { name: '게시판관리', path: '/boardMgmt/board' },
      { name: '게시물관리', path: '/boardMgmt/post' },
      { name: '댓글관리', path: '/boardMgmt/comment' }
    ]
  },
  {
    name: '회원관리',
    path: '/userMgmt/account',
    icon: Settings,
    items: [
      { name: '계정관리', path: '/userMgmt/account' },
      { name: '승인관리', path: '/userMgmt/approve' },
      { name: '휴면회원', path: '/userMgmt/human' },
      { name: '탈퇴회원', path: '/userMgmt/secede' }
    ]
  },
  {
    name: '통계관리',
    path: '/calculate/homepage',
    icon: Settings,
    items: [{ name: '홈페이지 사용통계', path: '/calculate/homepage' }]
  },
  {
    name: '설정',
    path: '/setting/hpInfo',
    icon: Settings,
    items: [
      { name: '코드관리', path: '/setting/code' },
      { name: '홈페이지 정보', path: '/setting/hpInfo' },
      { name: '메타데이터', path: '/setting/metadata' },
      { name: 'IP 접속차단', path: '/setting/ipBlocking' },
      { name: '정보보호관리', path: '/setting/infoProtection' }
    ]
  }
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg overflow-y-scroll z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <h1 className="text-[30px] font-[900]">Daol Company</h1>
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
