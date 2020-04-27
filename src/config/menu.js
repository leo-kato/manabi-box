const MENU_LIST = [
  { useInGlobalNav: true, useInHome: false, color: '', name: 'Home', icon: 'mdi-home', path: '/', pageTitle: '全てのメニュー', description: '全てのメニューを表示します。' },
  { useInGlobalNav: true, useInHome: true, color: 'blue', name: '100マス計算', icon: 'mdi-calculator-variant', path: '/materials/box100', description: 'たし算、ひき算、かけ算。できるだけ早く、できるだけ正確に100マス計算。' },
  { useInGlobalNav: true, useInHome: true, color: '#952175', name: '漢字書くのだ！', icon: 'mdi-pen', path: '/materials/kanji7', description: '漢字を丁寧に書く練習。' },
  { useInGlobalNav: true, useInHome: true, color: 'purple', name: '漢字なぞるのだ！', icon: 'mdi-pencil-box-multiple', path: '/materials/kanji21', description: '漢字をなぞって覚えよう。' },
  { useInGlobalNav: true, useInHome: true, color: '#26A69A', name: '問い合わせ', icon: 'mdi-account-box', path: '/contact', description: '何か気になることがあればこちらまで。' },
];

export default {
  FULL_LIST: MENU_LIST,
  LIST: MENU_LIST.filter(m => m.useInHome),
  GLOBAL_NAV: MENU_LIST.filter(m => m.useInGlobalNav),
}