
// ------------ Site Icon ----------------



  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function createFavicon(svg) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);

    document.querySelectorAll("link[rel='icon']").forEach(el => el.remove());
    document.head.appendChild(link);
  }

  const lightIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.77422" height="44.7468" viewBox="0,0,40.77422,44.7468"><g transform="translate(-219.61289,-157.6266)"><g stroke-miterlimit="10"><path d="M236.67633,161.31608c-0.0165,0.34408 -0.31665,0.56919 -0.31665,0.56919c-0.02402,0.01802 -0.04933,0.03797 -0.07581,0.0597c-0.05522,0.08227 -0.16501,0.218 -0.32938,0.29713c-0.71156,0.67999 -1.79256,1.87089 -2.33489,1.98079c-0.87774,0.17787 -2.57736,-1.64225 -2.58089,-0.74668c-0.00416,1.0523 0.66888,2.93836 0.04515,3.93661c-0.74739,1.19614 -3.223,0.42629 -4.27012,0.6963c-0.31092,0.08018 -0.25936,2.22916 -0.2588,2.37145c-0.06051,0.90761 0.21324,2.88728 -0.69927,3.52743c-1.09264,0.76651 -3.37286,0.83075 -4.70633,1.13167c-0.51794,0.11688 0.81461,0.68126 1.22468,1.01854c0.65398,0.5379 2.43694,1.5217 2.74359,2.28322c0.86576,2.15002 -1.92276,2.88109 -1.70956,4.65912c0.0548,0.45702 1.30007,1.36023 1.55724,1.68407c0.528,0.791 1.88959,1.09744 2.26024,1.86496c0.33412,0.69185 -0.62818,2.2184 0.13568,2.30091c1.21918,0.1317 2.03077,-1.57281 3.46489,-1.32261c1.54401,0.26937 1.5002,0.9172 2.48366,1.74914c0.5526,0.46746 0.94581,-1.19056 1.62529,-1.43996c1.56794,-0.5755 1.67526,-0.14667 2.55801,0.78988c0.12963,0.13753 0.71678,1.0724 0.83964,0.92353c0.4114,-0.75974 2.52702,0.55645 2.54782,0.99278c0.09306,1.95287 1.27009,3.00747 -0.94301,3.75388c-0.26445,0.08919 1.67982,0.1369 2.07721,0.72367c0.77256,1.14073 0.04029,1.76446 -0.42913,2.6809c-0.06815,0.13305 -0.16317,0.35588 -0.26357,0.55299c0.51499,0.00813 1.3392,0.21254 1.76713,0.3023c0.17451,0.4091 0.42232,0.79421 0.52354,1.22731c0.04536,0.19409 -0.04032,0.57479 -0.13453,0.87142c0.50594,-0.54212 1.87266,-0.99263 1.87492,-1.59381c0.0032,-0.85012 -1.9849,-0.76904 -1.78527,-1.92862c0.43482,-2.52584 3.69697,-0.27431 3.82025,-2.70521c0.04681,-0.92302 -2.19374,-1.36661 -2.2085,-2.56572c-0.00559,-0.45452 0.45396,-0.78766 0.68094,-1.18148c0.57164,-0.6294 2.84014,-2.19979 2.96981,-3.09161c0.10301,-0.70845 -1.79011,-0.79085 -1.69674,-1.99676c0.04123,-0.53244 0.65419,-0.84991 1.04246,-1.21657c0.80417,-0.75941 3.07533,-2.0848 4.27228,-1.94596c0.041,0.00476 2.27159,1.16118 2.40383,1.11873c0.78722,-0.25269 1.24111,-3.26264 1.61235,-3.97898c0.38901,-0.33031 0.76161,-0.68098 1.16702,-0.99094c0.39483,-0.30188 1.52404,-0.42154 1.23937,-0.82896c-0.83887,-1.20063 -3.37843,-1.15212 -3.41672,-2.9433c-0.04491,-2.10111 3.82779,-3.22048 3.35725,-4.87001c-0.58552,-2.05264 -5.08938,1.21838 -3.89709,-2.92054c0.08153,-0.28302 0.28545,-0.51528 0.42817,-0.77293c1.00667,-3.29374 -1.58865,-0.63402 -3.67949,-1.8637c-1.22156,-0.71843 -1.50295,-1.9307 -2.14702,-3.09019c-0.32275,-0.58103 -0.30224,-1.62178 -0.95426,-1.7508c-0.52048,-0.10299 -3.1201,2.26526 -3.88462,2.45696c-1.95138,0.4893 -2.17596,-1.25291 -3.36821,-2.25528c-2.46821,-1.75643 0.3264,2.61174 -2.80218,2.35534c-0.58973,-0.04833 -0.74534,-1.05445 -1.32273,-1.18381c-0.21051,-0.04716 -0.36638,0.10419 -0.50762,0.30449zM235.10333,161.01172l0.1062,-0.17185c1.15507,-1.1314 2.5416,-2.01135 3.53742,-0.12508c0.07859,0.14887 -0.1203,-0.32989 -0.09412,-0.49618c0.11207,-0.71166 0.50632,-2.18191 1.22777,-2.5182c0.73945,-0.34468 1.8503,0.61063 2.34754,0.95438c0.63843,0.55464 1.05997,1.66515 1.6954,2.10741c0.95738,0.66633 3.71887,-2.84465 4.97709,-2.58501c1.50726,0.31104 2.2305,3.57365 3.02799,4.65299c1.25438,1.6977 3.61812,-0.8247 4.968,0.81862c0.56031,0.68211 0.03746,2.5701 -0.17216,3.27741c-1.4435,2.59071 2.50474,-0.24566 3.49374,2.58991c0.92662,2.65674 -2.66454,3.24059 -3.26577,5.31924c-0.13744,0.47519 0.85303,0.50222 1.29326,0.72781c0.91382,0.46827 1.72947,0.73335 2.08286,1.93298c0.44773,1.51987 -1.7906,2.37587 -2.68823,3.1049c-0.68968,1.47137 -0.54552,3.90364 -2.46335,4.51207c-0.91648,0.29075 -2.01895,-0.92439 -2.86062,-1.08894c-0.6081,-0.11889 -3.36871,1.30386 -3.68577,1.76228c-0.25677,0.37126 0.91527,0.2952 1.18343,0.65833c0.26795,0.36284 0.52631,0.79986 0.51625,1.2508c-0.0334,1.49793 -2.38886,3.02475 -3.31356,4.04087c-0.73917,0.38728 1.02039,0.94988 1.35584,1.41864c0.68872,0.96244 0.59263,2.9562 -0.36654,3.78777c-0.04888,0.04237 -1.59468,0.36665 -2.42686,0.43716c0.24293,0.12764 0.49719,0.3077 0.59316,0.45418c0.29771,0.45437 0.67205,0.94118 0.67254,1.48439c0.00078,0.87075 -0.88398,1.53705 -1.53899,2.11078c-2.14696,1.88052 -3.26977,0.74765 -3.15974,-1.60586c-2.30454,0.55649 -2.96904,-0.68825 -1.89286,-2.71094c0.18926,-0.35572 0.92754,-0.83543 0.58979,-1.05516c-0.77839,-0.50641 -2.39899,-0.03933 -2.62278,-1.58175c-0.25298,-1.74352 1.00121,-1.04866 1.23248,-1.96766c0.0308,-0.1224 -0.11122,-1.79744 -0.19213,-1.67898c-0.47612,0.12941 -0.94363,0.48035 -1.42835,0.38824c-0.88098,-0.16741 -1.10592,-1.65997 -1.78148,-1.98136c-1.03226,-0.49109 -1.61947,2.1122 -3.31505,1.52693c-1.02124,-0.35251 -0.9646,-1.42318 -2.1015,-1.64728c-1.38474,-0.27295 -2.16804,1.90198 -3.83741,1.2247c-1.72071,-0.69811 -0.50814,-1.88989 -0.88325,-2.96353c-0.04891,-0.14 -1.87661,-1.31706 -2.1551,-1.70128c-0.92016,-1.21737 -2.21291,-1.65838 -1.63175,-3.4984c0.20843,-0.65992 2.01395,-2.4377 1.64925,-3.06481c-0.68298,-1.17441 -5.42072,-2.64103 -3.84349,-4.84965c0.8744,-1.22443 3.78036,-0.91909 4.97346,-1.41564c0.74503,-0.31007 0.09615,-1.61111 0.14983,-2.4163c0.00318,-0.90328 -0.09385,-3.02391 0.92994,-3.57228c0.17128,-0.09174 2.2434,-0.25099 2.72641,-0.29162c0.38374,-0.03227 1.06625,0.34375 1.15487,-0.031c0.27631,-1.16839 -0.83968,-3.13738 0.21497,-4.2148c0.79172,-0.80881 2.46316,0.47114 3.19302,0.44207c0.08399,-0.00335 1.21225,-1.15618 1.82837,-1.7513z" fill="#1e1a1a" stroke="none" stroke-width="0.5"/><path d="M243.41513,165.69795c1.24559,0.2076 2.29494,1.142 2.29494,2.38589v4.37055c0,1.28163 -1.01877,2.33238 -2.29494,2.33238h-4.58453c-1.55656,0 -2.86734,1.33633 -2.86734,2.85129v2.09701h-1.5781c-1.33394,0 -2.11311,-0.9682 -2.43938,-2.32704c-0.44012,-1.8255 -0.42142,-2.91648 0,-4.66478c0.36535,-1.52526 1.53339,-2.32703 2.86734,-2.32703h1.72254h4.58988v-0.5831h-4.58988v-1.74929c0,-1.32452 0.35264,-2.04274 2.29494,-2.38589c0.65932,-0.11667 1.40865,-0.18358 2.1933,-0.18723c0.78465,-0.00365 1.60276,0.05598 2.39123,0.18723zM237.68045,167.79496c0,0.48211 0.38547,0.87198 0.86127,0.87198c0.47411,0 0.86127,-0.38986 0.86127,-0.87198c0,-0.48383 -0.38717,-0.87732 -0.86127,-0.87732c-0.47581,0 -0.86127,0.39349 -0.86127,0.87732z" fill="none" stroke="#1e1a1a" stroke-width="1"/><path d="M248.00501,170.41622c1.33564,0 1.96527,0.99908 2.29494,2.32703c0.45881,1.84438 0.4792,3.22702 0,4.66478c-0.46391,1.39658 -0.96099,2.32704 -2.29494,2.32704h-2.29495h-4.58453v0.5831h4.58453v1.74929c0,1.32452 -1.13942,1.99783 -2.29494,2.33239c-1.73838,0.50441 -3.13163,0.42721 -4.58453,0c-1.21329,-0.35686 -2.29494,-1.0885 -2.29494,-2.33239v-4.37055c0,-1.25761 1.03916,-2.33238 2.29494,-2.33238h4.58453c1.52767,0 2.86734,-1.32997 2.86734,-2.91013v-2.03816zM242.84273,182.35633c0,0.48382 0.38717,0.87733 0.86128,0.87733c0.47581,0 0.86127,-0.3935 0.86127,-0.87733c0,-0.48211 -0.38546,-0.87196 -0.86127,-0.87196c-0.47411,0 -0.86128,0.38985 -0.86128,0.87196z" fill="none" stroke="#1e1a1a" stroke-width="1"/></g></g></svg><!--rotationCenter:20.38711356880441:22.37340122130223-->`;

  const darkIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.77422" height="44.7468" viewBox="0,0,40.77422,44.7468"><g transform="translate(-219.61289,-157.6266)"><g stroke-miterlimit="10"><path d="M236.67633,161.31608c-0.0165,0.34408 -0.31665,0.56919 -0.31665,0.56919c-0.02402,0.01802 -0.04933,0.03797 -0.07581,0.0597c-0.05522,0.08227 -0.16501,0.218 -0.32938,0.29713c-0.71156,0.67999 -1.79256,1.87089 -2.33489,1.98079c-0.87774,0.17787 -2.57736,-1.64225 -2.58089,-0.74668c-0.00416,1.0523 0.66888,2.93836 0.04515,3.93661c-0.74739,1.19614 -3.223,0.42629 -4.27012,0.6963c-0.31092,0.08018 -0.25936,2.22916 -0.2588,2.37145c-0.06051,0.90761 0.21324,2.88728 -0.69927,3.52743c-1.09264,0.76651 -3.37286,0.83075 -4.70633,1.13167c-0.51794,0.11688 0.81461,0.68126 1.22468,1.01854c0.65398,0.5379 2.43694,1.5217 2.74359,2.28322c0.86576,2.15002 -1.92276,2.88109 -1.70956,4.65912c0.0548,0.45702 1.30007,1.36023 1.55724,1.68407c0.528,0.791 1.88959,1.09744 2.26024,1.86496c0.33412,0.69185 -0.62818,2.2184 0.13568,2.30091c1.21918,0.1317 2.03077,-1.57281 3.46489,-1.32261c1.54401,0.26937 1.5002,0.9172 2.48366,1.74914c0.5526,0.46746 0.94581,-1.19056 1.62529,-1.43996c1.56794,-0.5755 1.67526,-0.14667 2.55801,0.78988c0.12963,0.13753 0.71678,1.0724 0.83964,0.92353c0.4114,-0.75974 2.52702,0.55645 2.54782,0.99278c0.09306,1.95287 1.27009,3.00747 -0.94301,3.75388c-0.26445,0.08919 1.67982,0.1369 2.07721,0.72367c0.77256,1.14073 0.04029,1.76446 -0.42913,2.6809c-0.06815,0.13305 -0.16317,0.35588 -0.26357,0.55299c0.51499,0.00813 1.3392,0.21254 1.76713,0.3023c0.17451,0.4091 0.42232,0.79421 0.52354,1.22731c0.04536,0.19409 -0.04032,0.57479 -0.13453,0.87142c0.50594,-0.54212 1.87266,-0.99263 1.87492,-1.59381c0.0032,-0.85012 -1.9849,-0.76904 -1.78527,-1.92862c0.43482,-2.52584 3.69697,-0.27431 3.82025,-2.70521c0.04681,-0.92302 -2.19374,-1.36661 -2.2085,-2.56572c-0.00559,-0.45452 0.45396,-0.78766 0.68094,-1.18148c0.57164,-0.6294 2.84014,-2.19979 2.96981,-3.09161c0.10301,-0.70845 -1.79011,-0.79085 -1.69674,-1.99676c0.04123,-0.53244 0.65419,-0.84991 1.04246,-1.21657c0.80417,-0.75941 3.07533,-2.0848 4.27228,-1.94596c0.041,0.00476 2.27159,1.16118 2.40383,1.11873c0.78722,-0.25269 1.24111,-3.26264 1.61235,-3.97898c0.38901,-0.33031 0.76161,-0.68098 1.16702,-0.99094c0.39483,-0.30188 1.52404,-0.42154 1.23937,-0.82896c-0.83887,-1.20063 -3.37843,-1.15212 -3.41672,-2.9433c-0.04491,-2.10111 3.82779,-3.22048 3.35725,-4.87001c-0.58552,-2.05264 -5.08938,1.21838 -3.89709,-2.92054c0.08153,-0.28302 0.28545,-0.51528 0.42817,-0.77293c1.00667,-3.29374 -1.58865,-0.63402 -3.67949,-1.8637c-1.22156,-0.71843 -1.50295,-1.9307 -2.14702,-3.09019c-0.32275,-0.58103 -0.30224,-1.62178 -0.95426,-1.7508c-0.52048,-0.10299 -3.1201,2.26526 -3.88462,2.45696c-1.95138,0.4893 -2.17596,-1.25291 -3.36821,-2.25528c-2.46821,-1.75643 0.3264,2.61174 -2.80218,2.35534c-0.58973,-0.04833 -0.74534,-1.05445 -1.32273,-1.18381c-0.21051,-0.04716 -0.36638,0.10419 -0.50762,0.30449zM235.10333,161.01172l0.1062,-0.17185c1.15507,-1.1314 2.5416,-2.01135 3.53742,-0.12508c0.07859,0.14887 -0.1203,-0.32989 -0.09412,-0.49618c0.11207,-0.71166 0.50632,-2.18191 1.22777,-2.5182c0.73945,-0.34468 1.8503,0.61063 2.34754,0.95438c0.63843,0.55464 1.05997,1.66515 1.6954,2.10741c0.95738,0.66633 3.71887,-2.84465 4.97709,-2.58501c1.50726,0.31104 2.2305,3.57365 3.02799,4.65299c1.25438,1.6977 3.61812,-0.8247 4.968,0.81862c0.56031,0.68211 0.03746,2.5701 -0.17216,3.27741c-1.4435,2.59071 2.50474,-0.24566 3.49374,2.58991c0.92662,2.65674 -2.66454,3.24059 -3.26577,5.31924c-0.13744,0.47519 0.85303,0.50222 1.29326,0.72781c0.91382,0.46827 1.72947,0.73335 2.08286,1.93298c0.44773,1.51987 -1.7906,2.37587 -2.68823,3.1049c-0.68968,1.47137 -0.54552,3.90364 -2.46335,4.51207c-0.91648,0.29075 -2.01895,-0.92439 -2.86062,-1.08894c-0.6081,-0.11889 -3.36871,1.30386 -3.68577,1.76228c-0.25677,0.37126 0.91527,0.2952 1.18343,0.65833c0.26795,0.36284 0.52631,0.79986 0.51625,1.2508c-0.0334,1.49793 -2.38886,3.02475 -3.31356,4.04087c-0.73917,0.38728 1.02039,0.94988 1.35584,1.41864c0.68872,0.96244 0.59263,2.9562 -0.36654,3.78777c-0.04888,0.04237 -1.59468,0.36665 -2.42686,0.43716c0.24293,0.12764 0.49719,0.3077 0.59316,0.45418c0.29771,0.45437 0.67205,0.94118 0.67254,1.48439c0.00078,0.87075 -0.88398,1.53705 -1.53899,2.11078c-2.14696,1.88052 -3.26977,0.74765 -3.15974,-1.60586c-2.30454,0.55649 -2.96904,-0.68825 -1.89286,-2.71094c0.18926,-0.35572 0.92754,-0.83543 0.58979,-1.05516c-0.77839,-0.50641 -2.39899,-0.03933 -2.62278,-1.58175c-0.25298,-1.74352 1.00121,-1.04866 1.23248,-1.96766c0.0308,-0.1224 -0.11122,-1.79744 -0.19213,-1.67898c-0.47612,0.12941 -0.94363,0.48035 -1.42835,0.38824c-0.88098,-0.16741 -1.10592,-1.65997 -1.78148,-1.98136c-1.03226,-0.49109 -1.61947,2.1122 -3.31505,1.52693c-1.02124,-0.35251 -0.9646,-1.42318 -2.1015,-1.64728c-1.38474,-0.27295 -2.16804,1.90198 -3.83741,1.2247c-1.72071,-0.69811 -0.50814,-1.88989 -0.88325,-2.96353c-0.04891,-0.14 -1.87661,-1.31706 -2.1551,-1.70128c-0.92016,-1.21737 -2.21291,-1.65838 -1.63175,-3.4984c0.20843,-0.65992 2.01395,-2.4377 1.64925,-3.06481c-0.68298,-1.17441 -5.42072,-2.64103 -3.84349,-4.84965c0.8744,-1.22443 3.78036,-0.91909 4.97346,-1.41564c0.74503,-0.31007 0.09615,-1.61111 0.14983,-2.4163c0.00318,-0.90328 -0.09385,-3.02391 0.92994,-3.57228c0.17128,-0.09174 2.2434,-0.25099 2.72641,-0.29162c0.38374,-0.03227 1.06625,0.34375 1.15487,-0.031c0.27631,-1.16839 -0.83968,-3.13738 0.21497,-4.2148c0.79172,-0.80881 2.46316,0.47114 3.19302,0.44207c0.08399,-0.00335 1.21225,-1.15618 1.82837,-1.7513z" fill="#ededed" stroke="none" stroke-width="0.5"/><path d="M243.41513,165.69795c1.24559,0.2076 2.29494,1.142 2.29494,2.38589v4.37055c0,1.28163 -1.01877,2.33238 -2.29494,2.33238h-4.58453c-1.55656,0 -2.86734,1.33633 -2.86734,2.85129v2.09701h-1.5781c-1.33394,0 -2.11311,-0.9682 -2.43938,-2.32704c-0.44012,-1.8255 -0.42142,-2.91648 0,-4.66478c0.36535,-1.52526 1.53339,-2.32703 2.86734,-2.32703h1.72254h4.58988v-0.5831h-4.58988v-1.74929c0,-1.32452 0.35264,-2.04274 2.29494,-2.38589c0.65932,-0.11667 1.40865,-0.18358 2.1933,-0.18723c0.78465,-0.00365 1.60276,0.05598 2.39123,0.18723zM237.68045,167.79496c0,0.48211 0.38547,0.87198 0.86127,0.87198c0.47411,0 0.86127,-0.38986 0.86127,-0.87198c0,-0.48383 -0.38717,-0.87732 -0.86127,-0.87732c-0.47581,0 -0.86127,0.39349 -0.86127,0.87732z" fill="none" stroke="#ededed" stroke-width="1"/><path d="M248.00501,170.41622c1.33564,0 1.96527,0.99908 2.29494,2.32703c0.45881,1.84438 0.4792,3.22702 0,4.66478c-0.46391,1.39658 -0.96099,2.32704 -2.29494,2.32704h-2.29495h-4.58453v0.5831h4.58453v1.74929c0,1.32452 -1.13942,1.99783 -2.29494,2.33239c-1.73838,0.50441 -3.13163,0.42721 -4.58453,0c-1.21329,-0.35686 -2.29494,-1.0885 -2.29494,-2.33239v-4.37055c0,-1.25761 1.03916,-2.33238 2.29494,-2.33238h4.58453c1.52767,0 2.86734,-1.32997 2.86734,-2.91013v-2.03816zM242.84273,182.35633c0,0.48382 0.38717,0.87733 0.86128,0.87733c0.47581,0 0.86127,-0.3935 0.86127,-0.87733c0,-0.48211 -0.38546,-0.87196 -0.86127,-0.87196c-0.47411,0 -0.86128,0.38985 -0.86128,0.87196z" fill="none" stroke="#ededed" stroke-width="1"/></g></g></svg><!--rotationCenter:20.387109369387588:22.373399127982054-->`;

  function updateFavicon(e) {
    createFavicon(e.matches ? darkIcon : lightIcon);
  }

  updateFavicon(darkModeQuery);
  darkModeQuery.addEventListener('change', updateFavicon);













// ---------- CodeMirror ----------
const cm = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "python",
  theme: "material-darker",
  lineNumbers: true,
  lineWrapping: false
});

cm.setOption("indentUnit", 4);         // 4 spaces per indent
cm.setOption("tabSize", 4);
cm.setOption("lint", true);
cm.setOption("gutters", ["CodeMirror-lint-markers"]);
CodeMirror.registerHelper("lint", "python", function(text) {
  return []; // placeholder - enables gutter & squiggles
});





// ---- warning before closing ----
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});











const hiddenPicker = document.createElement("input");
hiddenPicker.type = "color";
hiddenPicker.style.position = "absolute";
hiddenPicker.style.zIndex = "9999";
hiddenPicker.style.display = "none";
hiddenPicker.style.opacity = "0";
document.body.appendChild(hiddenPicker);

cm.getWrapperElement().addEventListener("contextmenu", e => {
  const sel = cm.getSelection();
  if (!sel) return;

  const hexMatch = sel.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (!hexMatch) return;

  e.preventDefault();

  hiddenPicker.value = hexMatch[0].length < 7 
    ? hexMatch[0] + (hexMatch[0].length === 4 ? "ff" : "f") 
    : hexMatch[0];

  hiddenPicker.style.left = (e.clientX + 10) + "px";
  hiddenPicker.style.top = (e.clientY + 10) + "px";
  hiddenPicker.style.display = "block";
  hiddenPicker.focus();
  hiddenPicker.showPicker();

  let replaced = false;

  const replaceAndClose = () => {
    if (!replaced && hiddenPicker.value !== hexMatch[0]) {
      cm.replaceSelection(hiddenPicker.value);
      replaced = true;
    }
    hiddenPicker.style.display = "none";
    hiddenPicker.blur();
  };

  const onChange = () => {
    replaceAndClose();
  };

  const onKeyDown = ev => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      replaceAndClose();
    }
  };

  hiddenPicker.addEventListener("change", onChange, {once: true});
  hiddenPicker.addEventListener("blur", replaceAndClose, {once: true});
  hiddenPicker.addEventListener("keydown", onKeyDown, {once: true});
});
















function resizeEditor() {
  const wrapper = document.querySelector(".editor-wrapper");
  cm.setSize("100%", wrapper.getBoundingClientRect().height + "px");
}
window.addEventListener("resize", resizeEditor);
window.addEventListener("load", resizeEditor);

document.getElementById("themeSelect")
  .addEventListener("change", e => {
    cm.setOption("theme", e.target.value);
    setCookie("editorTheme", e.target.value);
  });





// ---------- Project Title ----------
const projectTitleInput = document.getElementById("projectTitle");

function updateDocumentTitle() {
  document.title = projectTitleInput.value + " - PyNugget Editor";
}

projectTitleInput.addEventListener("input", updateDocumentTitle);
updateDocumentTitle();




// =====================================================
//          LOCAL SETTINGS (THEME + ZOOM ONLY)
// =====================================================

const SETTINGS_KEY = "pynugget_settings";

function saveSettings(obj) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(obj));
}

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
  } catch {
    return {};
  }
}


// ---------- Load Settings ----------
window.addEventListener("load", () => {
  const settings = loadSettings();

  // Theme
  if (settings.theme) {
    cm.setOption("theme", settings.theme);
    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) themeSelect.value = settings.theme;
  }

  // Zoom
  if (settings.zoom !== undefined) {
    editorZoom = parseFloat(settings.zoom);
    applyEditorZoom();
  }
});


// ---------- Auto Save (SETTINGS ONLY) ----------
let lastSettingsSnapshot = "";

setInterval(() => {
  const settings = {
    theme: cm.getOption("theme"),
    zoom: editorZoom
  };

  const serialized = JSON.stringify(settings);

  if (serialized !== lastSettingsSnapshot) {
    saveSettings(settings);
    lastSettingsSnapshot = serialized;
  }
}, 1000);






// ---------- Editor Zoom ----------
let editorZoom = 1.0;
const minZoom = 0.5;
const maxZoom = 3.0;

function applyEditorZoom() {
  cm.getWrapperElement().style.fontSize = (editorZoom * 14) + "px";
  cm.refresh();
}

cm.getWrapperElement().addEventListener("wheel", e => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    editorZoom = Math.min(maxZoom, Math.max(minZoom, editorZoom + delta));
    applyEditorZoom();
    setCookie("editorZoom", editorZoom);
  }
}, { passive: false });





// ---------- Stage ----------
const stage = document.getElementById("stage");
const rightPane = document.getElementById("rightPane");

// Ensure stage is relative positioned
stage.style.position = "relative";







// ---------- Resize Stage ----------
function setStageSize(w, h) {
  w = Math.min(Math.max(1, parseInt(w)), 4000);
  h = Math.min(Math.max(1, parseInt(h)), 4000);

  stage.style.width = w + "px";
  stage.style.height = h + "px";

  updateRightPaneWidth();
}

function updateRightPaneWidth() {
  rightPane.style.width =
    (stage.getBoundingClientRect().width + 16) + "px";
}

window.addEventListener("load", updateRightPaneWidth);






// ---------- Stage Image Handling ----------
const stageImages = []; // track all stamped images


function renderImage(name, x, y, widthPercent = 100, heightPercent = 100, opacity = 1.0, rotation = 0) {
  const asset = assets[name];
  const src = asset ? asset.data : name; // fallback to URL

  const img = document.createElement("img");
  img.src = src;

  img.loading = "eager";
  img.decoding = "sync";
  img.style.position = "absolute";
  img.style.pointerEvents = "none";

  img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
  img.style.left = parseFloat(x) + "px";
  img.style.top = parseFloat(y) + "px";
  img.style.opacity = Math.max(0, Math.min(1, opacity));
  img.style.transition = "none";
  img.style.willChange = "opacity, transform";
  img.style.contain = "strict";
  img.style.backfaceVisibility = "hidden";

  const applySize = () => {
    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
      img.style.width  = (img.naturalWidth  * (widthPercent / 100)) + "px";
      img.style.height = (img.naturalHeight * (heightPercent / 100)) + "px";
    }
  };

  if (img.complete && img.naturalWidth) {
    applySize();
  } else {
    img.onload = applySize;
  }

  stage.appendChild(img);
  stageImages.push(img);
}




// ---------Text Handling-------------

function renderText(text, x, y, align = "center", size = 24, font = "Arial", color = "white", shadow = "1px 1px 3px black") {
  const div = document.createElement("div");
  div.textContent = text;
  div.style.position = "absolute";
  div.style.left = parseFloat(x) + "px";
  div.style.top = parseFloat(y) + "px";
  div.style.fontSize = size + "px";
  div.style.fontFamily = `"${font}", sans-serif`;
  div.style.color = color;
  div.style.textShadow = shadow;
  div.style.pointerEvents = "none";
  div.style.whiteSpace = "pre-wrap";
  div.style.textAlign = align;

  if (align === "left") {
    div.style.transform = "translate(0, -50%)";
  } else if (align === "right") {
    div.style.transform = "translate(-100%, -50%)";
  } else {
    div.style.transform = "translate(-50%, -50%)";
  }

  stage.appendChild(div);
  stageImages.push(div);
}





function play_sound_js(name, volume = 1.0) {
  const asset = assets[name];
  const src = asset ? asset.data : name;

  const audio = new Audio(src);
  audio.volume = Math.max(0, Math.min(1, volume));
  audio.play().catch(e => console.warn("Audio play failed:", e));
}






// Clear all stamped images
function clearStage() {
  stageImages.forEach(img => img.remove());
  stageImages.length = 0;
}





// ---------- Console ----------
const consoleOutput = document.getElementById("consoleOutput");


function writeConsole(text) {
  consoleOutput.textContent += text + "\n";
  
  const parent = consoleOutput.parentElement;
  const scrollTop = parent.scrollTop;
  const scrollHeight = parent.scrollHeight;
  const clientHeight = parent.clientHeight;
  
  // Only auto-scroll if user is near bottom (within ~30%)
  const atBottom = (scrollTop + clientHeight) >= (scrollHeight - clientHeight * 0.3);
  
  if (atBottom) {
    parent.scrollTop = scrollHeight;
  }
}



function clearConsole() {
  consoleOutput.textContent = "";
}








// ---------- Pyodide ----------
let pyodide = null;
let currentTask = null;

const runBtn = document.getElementById("runBtn");
const stopBtn = document.getElementById("stopBtn");
const statusText = document.getElementById("statusText");





let pythonReady = false;
const stageLoading = document.getElementById("stageLoading");


async function loadPython() {
  pyodide = await loadPyodide();

  // Install requests inside Pyodide
  await pyodide.loadPackage("micropip");
  await pyodide.loadPackage("numpy")
  await pyodide.runPythonAsync(`
      import micropip
      import math
      await micropip.install("requests")
  `);

    
  pyodide.globals.set("writeConsole", writeConsole);
  pyodide.globals.set("setStageSize", setStageSize);
  pyodide.globals.set("js_render_image", renderImage);
  pyodide.globals.set("clearStage", clearStage);
  pyodide.globals.set("js_play_sound", play_sound_js);


// Python → JS cursor changer
    pyodide.globals.set("set_cursor", (cursorName) => {
      if (typeof cursorName !== "string") return;
      const valid = [
        "auto", "default", "none", "pointer", "wait", "text", "move",
        "crosshair", "grab", "grabbing", "not-allowed", "help",
        "zoom-in", "zoom-out", "cell", "context-menu", "alias", "copy",
        "no-drop", "vertical-text", "all-scroll"
      ];
      const name = cursorName.toLowerCase().trim();
      stage.style.cursor = valid.includes(name) ? name : "default";
    });


    
  // Create a live JS-backed input_state object
  const inputState = { mouse_x:0, mouse_y:0, mouse_down:false, key_down:"Null" };
  pyodide.globals.set("input_state", inputState);

  // Patch Python globals to read from JS input_state
  await pyodide.runPythonAsync(`
import sys, asyncio, types

class ConsoleWriter:
    def write(self, text):
        writeConsole(text)
    def flush(self):
        pass

sys.stdout = ConsoleWriter()
sys.stderr = ConsoleWriter()

# stage dimensions
stage_width = 640
stage_height = 360





def resize_stage(x, y):
    global stage_width, stage_height
    stage_width = int(x)
    stage_height = int(y)
    setStageSize(stage_width, stage_height)

def cursor(d):
    """Change mouse cursor style on stage
    Examples: cursor("pointer"), cursor("grab"), cursor("text"), cursor("default")
    """
    set_cursor(d)


def play_sound(url, volume=1.0):
    js_play_sound(url, volume)

def render_image(url, x, y, width_percent=None, height_percent=None, opacity=None, rotation=None):
    js_render_image(url, x, y, width_percent or 100, height_percent or 100, opacity or 1.0, rotation or 0)

def render_text(text, x, y, align="center", size=24, font="Arial", color="white", shadow="1px 1px 3px black"):
    js_render_text(text, x, y, align, size, font, color, shadow)

def clear_stage():
    clearStage()









# non-blocking async sleep
import js
import types
time = types.SimpleNamespace()
import asyncio
def sleep(seconds):
    return asyncio.sleep(seconds)
time.sleep = sleep
time.time = lambda: js.Date.now() / 1000
time.perf_counter = lambda: js.performance.now() / 1000
time.monotonic = lambda: js.performance.now() / 1000

# ---------- live input ----------
def mouse_x(): return input_state.mouse_x
def mouse_y(): return input_state.mouse_y
def mouse_down(): return input_state.mouse_down
def key_down(): return input_state.key_down

# async loop runner
async def forever(func, fps=60):
    delay = 1/fps
    try:
        while True:
            maybe_await = func()
            if asyncio.iscoroutine(maybe_await):
                await maybe_await
            await asyncio.sleep(delay)
    except asyncio.CancelledError:
        pass

`);





// Track currently pressed keys (using event.key values)
const pressedKeys = new Set();

document.addEventListener("keydown", e => {
  pressedKeys.add(e.key);
  pushInputState(); // if you still want the old single key_down
});

document.addEventListener("keyup", e => {
  pressedKeys.delete(e.key);
  pushInputState();
});

// Expose to Python
pyodide.globals.set("KeyPressed", (key) => pressedKeys.has(key));
pyodide.globals.set("js_render_text", renderText);
    

    // -------------------- Finishing up --------------------
    runBtn.disabled = false;
    statusText.textContent = "Python ready";
    
    pythonReady = true;
    stageLoading.style.opacity = "0";
    setTimeout(() => stageLoading.style.display = "none", 500);
}








loadPython();















// ---------- Execution Control ----------
async function stopCurrentTask() {
  if (!pyodide) return;
  try {
    // Cancel everything except the currently executing task
    await pyodide.runPythonAsync(`
      import asyncio
      current = asyncio.current_task()
      for task in list(asyncio.all_tasks()):
          if task is not current and not task.done():
              task.cancel()
    `);
    // Give the event loop a moment to process cancellations
    await new Promise(r => setTimeout(r, 30));
  } catch {}
  currentTask = null;
}






// Stop button
stopBtn.onclick = async () => {
  if (!pyodide) {
    writeConsole("Python not loaded.");
    return;
  }
  if (!currentTask && pyodide.globals.get("asyncio").all_tasks().size <= 1) {
    writeConsole("Nothing is running.");
    return;
  }

  await stopCurrentTask();
  await stopCurrentTask();
  writeConsole("Stopped.");
};







runBtn.onclick = async () => {
  if (!pyodide) return;

  // Always stop anything that's currently running
    await stopCurrentTask();
    await stopCurrentTask();

  clearConsole();
    clearStage();
  stage.focus();

  let code = cm.getValue();
  try {
    await pyodide.runPythonAsync(code);
  } catch (err) {
    writeConsole(err.toString());
    return;
  }

  try {
    const hasLoop = await pyodide.runPythonAsync("'loop' in globals()");
    if (hasLoop) {
      currentTask = pyodide.runPythonAsync(`
        import asyncio
        try:
          await forever(loop)
        except asyncio.CancelledError:
          pass
        except Exception as e:
          writeConsole(str(e))
      `);
    } else {
      currentTask = null;
    }
  } catch (err) {
    writeConsole(err.toString());
    currentTask = null;
  }
};


































// ---------- Upload ----------





document.getElementById("uploadBtn").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".py,.pynugget,text/plain"; // support both types

  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      const text = e.target.result;

      if (file.name.endsWith(".pynugget")) {
        try {
          const project = JSON.parse(text);

          cm.setValue(project.code || "");
          projectTitleInput.value = project.title || "Untitled";
          // backward compatible asset loading
          loadAssetsFromProject(project.assets);
          updateDocumentTitle();

          if (project.theme) {
            cm.setOption("theme", project.theme);
            document.getElementById("themeSelect").value = project.theme;
          }

          if (project.zoom) {
            editorZoom = project.zoom;
            applyEditorZoom();
          }
          writeConsole("")
          writeConsole("Loaded PyNugget project: " + project.title);
        } catch (err) {
          writeConsole("")
          writeConsole("Failed to load PyNugget project: " + err);
        }
      } else {
        // fallback for plain .py files
        cm.setValue(text);
        projectTitleInput.value = file.name.replace(/\.py$/i, "");
        updateDocumentTitle();
      }
    };

    reader.readAsText(file);
  };

  input.click();
});





function loadAssetsFromProject(projectAssets) {
  if (!projectAssets) return;

  for (const [name, data] of Object.entries(projectAssets)) {
    assets[name] = data;
    addAssetToUI(name, data.type, data.data);
  }
}








function incrementTitleNumber(title) {
  return title.replace(/(\d+(\.\d+)?)\s*$/, (match) => {
    const num = parseFloat(match);
    const incremented = num + 1;

    // Preserve integer vs decimal style
    if (match.includes(".")) {
      return incremented.toString();
    } else {
      return Math.floor(incremented).toString();
    }
  });
}













// ---------- Download ----------








document.getElementById("downloadBtn").addEventListener("click", () => {
  const currentTitle = projectTitleInput.value || "Untitled";

  const project = {
    engine: "PyNugget",
    version: 2, // bump version so we know assets exist
    title: currentTitle,
    code: cm.getValue(),
    theme: cm.getOption("theme"),
    zoom: editorZoom,

    // NEW: save assets
    assets: assets
  };

  const blob = new Blob(
    [JSON.stringify(project, null, 2)],
    { type: "application/json" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = currentTitle + ".pynugget";
  a.click();
  URL.revokeObjectURL(a.href);

  // keep your rename logic (fixed bug btw)
  if (/\d+(\.\d+)?$/.test(currentTitle.trim())) {
    const shouldIncrement = confirm("Increment the number at the end of the project name?");
    if (shouldIncrement) {
      const nextTitle = incrementTitleNumber(currentTitle);
      projectTitleInput.value = nextTitle;
      updateDocumentTitle();
    }
  }
});








// ---------- Drag n' Drop ----------

window.addEventListener("dragover", e => {
  e.preventDefault();
});

window.addEventListener("drop", e => {
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  if (!file) return;

  if (!file.name.endsWith(".pynugget") && !file.name.endsWith(".py")) {
    writeConsole("Unsupported file type: " + file.name);
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    const text = e.target.result;

    if (file.name.endsWith(".pynugget")) {
      try {
        const project = JSON.parse(text);

        cm.setValue(project.code || "");
        projectTitleInput.value = project.title || "Untitled";
        // backward compatible asset loading
        loadAssetsFromProject(project.assets);
        updateDocumentTitle();

        if (project.theme) {
          cm.setOption("theme", project.theme);
          document.getElementById("themeSelect").value = project.theme;
        }

        if (project.zoom) {
          editorZoom = project.zoom;
          applyEditorZoom();
        }

        writeConsole("Loaded PyNugget project: " + project.title);
      } catch (err) {
        writeConsole("Failed to load PyNugget project: " + err);
      }
    } else {
      // fallback for plain .py files
      cm.setValue(text);
      projectTitleInput.value = file.name.replace(/\.py$/i, "");
      updateDocumentTitle();
      writeConsole("Loaded plain Python file: " + file.name);
    }
  };

  reader.readAsText(file);
});























// ---------- Reset Project Button ----------
document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Are you sure you want to reset the project? This will overwrite your current code and title.")) return;
  projectTitleInput.value = "Untitled-Project-1";
  updateDocumentTitle();
  cm.setValue(`def loop():
	if mouse_down:
		print("This is a web python editor.", "It has several custom functions and variables!", "These are: mouse_x, mouse_y, and key_down.", "The functions include resize_stage(width,height) and KeyPressed('Keyname'). This one returns a boolean.")
	else:
		print("Hello world")
		print("Click the stage for more info!")

await forever(loop)`);
});












// ---------- Live Input Tracking (variables version) ----------
const inputState = {
  mouse_x: 0,
  mouse_y: 0,
  mouse_down: false,
  key_down: "Null"
};


// Expose variables to Python
function pushInputState() {
  if (!pyodide) return;
  pyodide.globals.set("mouse_x", inputState.mouse_x);
  pyodide.globals.set("mouse_y", inputState.mouse_y);
  pyodide.globals.set("mouse_down", inputState.mouse_down);
  pyodide.globals.set("key_down", inputState.key_down);
}

stage.addEventListener("mousemove", e => {
  const rect = stage.getBoundingClientRect();

  inputState.mouse_x = (e.clientX - rect.left) / fullscreenScale;
  inputState.mouse_y = (e.clientY - rect.top) / fullscreenScale;


    document.getElementById("mousePos").textContent = `  ${Math.round(inputState.mouse_x)},${Math.round(inputState.mouse_y)}`;
  pushInputState();
});


stage.addEventListener("mousedown", e => {
  inputState.mouse_down = true;
  pushInputState();
});

stage.addEventListener("mouseup", e => {
  inputState.mouse_down = false;
  pushInputState();
});

document.addEventListener("keydown", e => {
  inputState.key_down = e.key;
  pushInputState();
});

document.addEventListener("keyup", e => {
  if (inputState.key_down === e.key) inputState.key_down = "Null";
  pushInputState();
});












async function autoRunWhenReady() {
  while (!pythonReady) {
    await new Promise(r => setTimeout(r, 50));
  }

  stage.focus();
  runBtn.click();
}


// ---------- Load Code From URL Hash (#code=, compressed) ----------
function loadCodeFromURL() {
  const hash = window.location.hash;

  if (!hash.startsWith("#code=")) return;

  const compressed = hash.substring(6);
  if (!compressed) return;

  let decoded = null; // <-- FIX: declare outside try

  try {
    decoded = LZString.decompressFromEncodedURIComponent(compressed);

    if (decoded) {
      cm.setValue(decoded);
      projectTitleInput.value = "Shared Project";
      updateDocumentTitle();
      
      writeConsole("\n\nLoaded compressed code from URL.");
      
      // Remove the code from the URL without reloading the page
      history.replaceState(null, "", window.location.pathname + window.location.search);

    } else {
      writeConsole("Failed to decompress URL code.");
    }

  } catch (err) {
    writeConsole("Invalid share link.");
  }

  // This part now works because decoded exists
  if (decoded) {
    cm.setValue(decoded);
    projectTitleInput.value = "Shared Project";
    updateDocumentTitle();

    writeConsole("\n\nLoaded compressed code from URL.");

    history.replaceState(null, "", window.location.pathname + window.location.search);

    autoRunWhenReady();
  }
}







window.addEventListener("load", loadCodeFromURL);






// ---------- Share Link Button (Compressed) ----------
document.getElementById("linkBtn").addEventListener("click", async () => {
  const code = cm.getValue();

  // Compress for URL
  const compressed = LZString.compressToEncodedURIComponent(code);

  const shareURL =
    window.location.origin +
    window.location.pathname +
    "#code=" +
    compressed;

  try {
    await navigator.clipboard.writeText(shareURL);
    alert("Compressed share link copied to clipboard! WARNING: Share links do not contain assets! See docs for more.");
  } catch (err) {
    alert("Failed to copy link.");
  }
});






document.addEventListener("keydown", function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
    e.preventDefault(); // stop Edge / browser "Save page as..."

    document.getElementById("downloadBtn").click(); // trigger your download logic
  }
});


























// ----------------- Fullscreen handling -----------------




const fullscreenBtn = document.getElementById("fullscreenBtn");

let fsWrapper = null;
let originalParent = null;
let originalNextSibling = null;
let fullscreenScale = 1;


fullscreenBtn.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await enterFullscreen();
  } else {
    await document.exitFullscreen();
  }
});



async function enterFullscreen() {

    const stageW = stage.offsetWidth;
    const stageH = stage.offsetHeight;

    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

  const padding = 0.2; // space from edges
    fullscreenScale = Math.min(
      (vw - padding) / stageW,
      (vh - padding) / stageH
    );

  originalParent = stage.parentNode;
  originalNextSibling = stage.nextSibling;

  fsWrapper = document.createElement("div");

  fsWrapper.style.position = "fixed";
  fsWrapper.style.inset = "0";
  fsWrapper.style.background = "black";
  fsWrapper.style.display = "flex";
  fsWrapper.style.alignItems = "center";
  fsWrapper.style.justifyContent = "center";
  fsWrapper.style.zIndex = "9999";

  document.body.appendChild(fsWrapper);
  fsWrapper.appendChild(stage);

  stage.style.transformOrigin = "center";
  stage.style.transform = `scale(${fullscreenScale})`;

  await fsWrapper.requestFullscreen();
}





document.addEventListener("fullscreenchange", () => {

  if (!document.fullscreenElement) {

    fullscreenScale = 1;
      
    stage.style.transform = "";
    stage.style.transformOrigin = "";

    if (originalNextSibling) {
      originalParent.insertBefore(stage, originalNextSibling);
    } else {
      originalParent.appendChild(stage);
    }

    fsWrapper.remove();
    fsWrapper = null;
  }

});











// ----------- Tabs --------------



document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active from all
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));

    // activate selected
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");

    // IMPORTANT: refresh CodeMirror when switching back
    if (btn.dataset.tab === "codeTab") {
      requestAnimationFrame(() => {
        cm.refresh();
      });
    }
  });
});








// ---------- Asset Handling --------------

const assets = {}; 
// format:
// {
//   "cat.png": { type: "image", data: "data:image/png;base64,..." },
//   "sound.mp3": { type: "audio", data: "data:audio/mpeg;base64,..." }
// }






document.getElementById("addAssetBtn").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = true;
  input.accept = ".png,.svg,.mp3";

  input.onchange = e => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = e => {
        const dataURL = e.target.result;

        const type = file.type.startsWith("image") ? "image" :
                     file.type.startsWith("audio") ? "audio" : "unknown";

        // prevent overwrite if same name exists
        let name = file.name;
        let counter = 1;

        while (assets[name]) {
          const parts = file.name.split(".");
          const ext = parts.pop();
          const base = parts.join(".");
          name = `${base} (${counter}).${ext}`;
          counter++;
        }

        assets[name] = {
          type,
          data: dataURL
        };

        addAssetToUI(name, type, dataURL);
        persistAssets();
      };

      reader.readAsDataURL(file);
    });
  };

  input.click();
});




















function addAssetToUI(name, type, data) {
  const list = document.getElementById("assetList");

  const item = document.createElement("div");
  item.className = "asset-item";
  item.draggable = false;
  

  // -------- HANDLE --------
  const handle = document.createElement("div");
    handle.className = "asset-handle";
    handle.textContent = "☰";
    handle.draggable = true;
    
    handle.addEventListener("dragstart", () => {
      item.classList.add("dragging");
      draggedItem = item;
    });
    
    handle.addEventListener("dragend", () => {
      item.classList.remove("dragging");
      draggedItem = null;
    });

  // -------- NAME (editable) --------
  const nameInput = document.createElement("input");
  nameInput.value = name;
  nameInput.className = "asset-name";

  nameInput.addEventListener("change", () => {
      const oldName = name;
      const newName = nameInput.value.trim();
    
      if (!newName || newName === oldName) return;
    
      assets[newName] = assets[oldName];
      delete assets[oldName];
    
      name = newName;
      persistAssets();
    });

  // -------- PREVIEW --------
  const preview = document.createElement("div");
  preview.className = "asset-preview";

  if (type === "image") {
    const img = document.createElement("img");
    img.src = data;
    preview.appendChild(img);
  }

  if (type === "audio") {
    const audio = document.createElement("audio");
    audio.src = data;
    audio.controls = true;
    preview.appendChild(audio);
  }

  // -------- DOWNLOAD --------
  const downloadBtn = document.createElement("button");
    downloadBtn.className = "asset-download-btn";
    downloadBtn.title = "Download";
    
    downloadBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e8e8e8" viewBox="0 0 256 256">
      <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
    </svg>
    `;

  downloadBtn.onclick = () => {
    const a = document.createElement("a");
    a.href = data;
    a.download = name;
    a.click();
  };

  // -------- DELETE --------
  const deleteBtn = document.createElement("button");
    deleteBtn.className = "asset-delete-btn";
    deleteBtn.title = "Delete";
    
    // Insert SVG icon
    deleteBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#e8e8e8" viewBox="0 0 256 256">
      <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
    </svg>
    `;

  deleteBtn.onclick = () => {
      const confirmDelete = confirm(`Delete "${name}"?`);
    
      if (!confirmDelete) return;
    
      delete assets[name];
      item.remove();
      updateEmptyAssetsUI();
      persistAssets();
    };

  // -------- LAYOUT --------
  const right = document.createElement("div");
  right.className = "asset-right";

  right.appendChild(nameInput);
  right.appendChild(preview);

  const buttons = document.createElement("div");
  buttons.className = "asset-buttons";
  buttons.appendChild(downloadBtn);
  buttons.appendChild(deleteBtn);

  item.appendChild(handle);
  item.appendChild(right);
  item.appendChild(buttons);

  list.appendChild(item);

  updateEmptyAssetsUI();
}





function updateEmptyAssetsUI() {
  const list = document.getElementById("assetList");
  if (!list) return;

  const empty = document.getElementById("assetEmptyState");

  if (Object.keys(assets).length === 0) {
    if (empty) empty.style.display = "block";
  } else {
    if (empty) empty.style.display = "none";
  }
}







//------Dragging------

let draggedItem = null;

const assetList = document.getElementById("assetList");

assetList.addEventListener("dragover", (e) => {
  e.preventDefault();

  const afterElement = getDragAfterElement(assetList, e.clientY);
  const dragging = document.querySelector(".dragging");

  if (!dragging) return;

  if (afterElement == null) {
    assetList.appendChild(dragging);
  } else {
    assetList.insertBefore(dragging, afterElement);
  }
});




function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".asset-item:not(.dragging)")];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}


    
