const MENUS = [
  { useInGallery: false, useInGlobalNav: false, color: '', name: 'Top', icon: 'mdi-home', path: '/', pageTitle: 'うちトレギャラリー', description: 'トップページに戻ります。' },
  { useInGallery: false, useInGlobalNav: true, color: '', name: '教材集', icon: 'mdi-folder-multiple-outline', path: '/gallery', pageTitle: 'うちトレギャラリー', description: '全ての教材を表示します。'},
  { useInGallery: true, useInGlobalNav: true, color: 'blue', name: '100マス計算', icon: 'mdi-calculator-variant', path: '/materials/box100', description: 'たし算、ひき算、かけ算。できるだけ早く、できるだけ正確に100マス計算。' },
  { useInGallery: true, useInGlobalNav: true, color: '#64B5F6', name: '25マス計算', icon: 'mdi-plus-minus-box', path: '/materials/box100light', description: 'たし算、ひき算、まずは25マスだけでチャレンジ！' },
  { useInGallery: true, useInGlobalNav: true, color: '#952175', name: '漢字書くのだ！', icon: 'mdi-pen', path: '/materials/kanji7', description: '漢字を丁寧に書く練習。' },
  { useInGallery: true, useInGlobalNav: true, color: 'purple', name: '漢字なぞるのだ！', icon: 'mdi-pencil-box-multiple', path: '/materials/kanji21', description: '漢字をなぞって覚えよう。' },
  { useInGallery: true, useInGlobalNav: true, color: 'teal', name: '都道府県の漢字って難しい！', icon: 'mdi-map-marker', path: '/materials/mapjapan', description: '都道府県の漢字を覚えよう！' },
  { useInGallery: true, useInGlobalNav: true, color: 'light-green', name: 'お問い合わせ', icon: 'mdi-account-box', path: '/contact', description: '何か気になることがあればこちらまで。' },
];

export default {
  FULL_LIST: MENUS,
  GLOBAL_NAV: MENUS.filter(m => m.useInGlobalNav),
  GALLERY: MENUS.filter(m => m.useInGallery),
}