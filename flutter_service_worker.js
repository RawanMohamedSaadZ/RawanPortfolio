'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "ede56f31489a449440a25f30522db96f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e2fb396d31fc9e252cd72656dfa283fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c543bab2e771d1b201cc2cd8b5561990",
".git/logs/refs/heads/master": "c543bab2e771d1b201cc2cd8b5561990",
".git/logs/refs/remotes/origin/master": "214bd8ac42582b96db3ef9bf74107173",
".git/objects/00/05d2d8c4e71ece427a3606a1094eee2ba0fd5a": "3edae61a8798864686a875b728f47a66",
".git/objects/00/a5d2e240f5519c379d8240a8452e191d936937": "6035cebaded67075e686364c7cab3fb6",
".git/objects/04/a9ce47b793d5b19e67876b028004ca3b4c1373": "aa6a3de14a1428fce68cbf2002583e52",
".git/objects/06/a9ae52fdc20c45ef6ea93e22fee62cc4a8da21": "9078675acaf995365ca83b97b047784a",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/14e20cdec4295c5deb3d6d7be6341dcaa00d4b": "a0b1ad243eaf145621264fcc69e03c7b",
".git/objects/0c/936b4550a84b512e3ccecfc2fa98c4fffcb01d": "12beace2475c82be64fc36b28d3af6ef",
".git/objects/0e/21bc6ba05d0297a176db6d930810cfbacd8f59": "6250bafd6fab447df383df77ee67affa",
".git/objects/13/1397d0ab557dce7fa669804d8ac686bb3f98d9": "674166b4c296eb7e8e3268ee87a2c5a2",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1e/c42b7d904ae4f823d5ddd1ec8c906f3e41842d": "4ec64d2de158195697f0a208d341c38f",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/24/7bc94fc2f36d7731600c06920d0572a7bf34bb": "6452f6cc8a3d6041b1348c3a65b1268b",
".git/objects/27/57fba8d15f082a437085842e29790fe7a3b03a": "11aa6c1cdfddb550cc8114f5188c4449",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/ff25eb7d23d967d5612a9d9d12e14f85955b1d": "fe91699860b90a4f57e022869984a308",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/37/00761c19bd7cd81787e8e5a11b10f3ba81d400": "7d6220630f9ad9008ffa0a93278f0e70",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/99cdb79ad53224f9d670d7e886040b75c0af47": "9bd2fc9f75a9bf33ebb64ffa9c4f5e93",
".git/objects/3f/4246826353c94f0bb73628b0ce014c55600f54": "acbec3b08bf4c13b1e75073d8c7ed556",
".git/objects/40/0a3ba674fb45cb827a99e865c45f8ff6fec861": "6620a2e7c77a009db627efee05764ecc",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/41/b31d54e269add743ed950931bc148218bfdb60": "79bf8a5990d3a1968e87a341fc6e88b6",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/44/8e8fca062f242af2f7a941a6e9c1eb0d9dc14b": "0614ee8223522a445d3f4daf7ce90be6",
".git/objects/44/98ea2bc995becaa1db02bcb1644ad93180ee9b": "8fc6faedfb26f16a98c9f70e49509de0",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/48/423d90bf37ab7cc5e5ad4fb618359fc1951b60": "5510360e5c1ff222c1be6c56e3200af6",
".git/objects/49/f7fbf534608f38d42a844180850ba102801f69": "dff2804fc000aeaba231e560f26ffcf8",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/3517517d23830709a35936a495e5769938c02e": "5150efea6201989583210a53f7b85b4e",
".git/objects/4c/125828d447185111e436a947e5e229995dc795": "e638392b828b3a07284cc4bcd64750b9",
".git/objects/4d/0ec40e9988f882417c96dba0aaf4f29f31be4f": "18000e04119e6a167536bee8b9c545ba",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/62a92b6dbfe10031152c56f8d6e95ef6fefd9c": "0d7225ccf0016f64fb950dbcb3f0f645",
".git/objects/5a/e4ac57bc4803f1479340e17251a7d79d327748": "314c470abce6c605c6dc91f0af6d38ec",
".git/objects/5c/b7ba6846940709bcc70b342c569b9a5213c950": "c15c680b1a48f7c1f6c01d160c0cbb2f",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/d2164e5212222c8df936e2e3ea8d45d8b4f0fd": "0c05fe87242162788bab4eff24eaf049",
".git/objects/62/73dcee9307ac829de8b0cde4940686bdc6a73c": "e4a9960711d1d3e59bca15ffa965633f",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6a/c39723fe2d99cbdd3940480096a0d29ebe16fd": "db282dc06ffb1948fd1edea37a3b75bd",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/3295bcfa30abf4936e1b77ec2d971aebf3f5f5": "2432cf2a51cf9da0bb3764ee63fb3bf9",
".git/objects/6f/54cc7902420e28b337e36cf968068534df39b5": "bc81a7be6a39c216a899cfeab8857ca0",
".git/objects/77/eed3fa6f3c3fdcf3d369bcac735cdf84a2ec30": "42fffc5d6ec9ce006ae2731559b37264",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7e/3fd538d8a1d63725292a3f1697ba377bc5885a": "cf65f363cf57dbcf94784ff3634edafe",
".git/objects/7e/cbd9f645dbd186bbde77ad886b087b88632e72": "95a8da9e85b5c262195b9cf8894506f7",
".git/objects/83/70128d6a44a0b31d638c31df019576647d1ea1": "5247da9d8e0159de39a09742c0d0e2e2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/86/e651a93bc2ece62265fc819dc00d69650991f0": "f70b6e92c0749931a1cb8d4300dd5a8c",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/a23a0148e0dc1c36a2774437625e864b5cb2ff": "101b486df579db65336d3e9ab4ec74ae",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/89/6f997551772ece28aeddc7075c007e72a33026": "0873a4a4d11d93d226f390c3d0105330",
".git/objects/8c/17cbaf87ce357aab25f9587d1fe9ec3ed926c2": "e0c5315215a8077f6cd212e9cf518533",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/90/af8ebbb7121f70b094abaf43b7f4e9757c6d0f": "2b46acbf55fee4eebeebd830bfc10b89",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/b552d913f61514ded45bad22592e6f3da3e539": "326324bb602c9c75560a8a5b8198b35f",
".git/objects/96/cdddb2d530ade7ecc0399b55101359b4e1981f": "3710a33fbbd281f0310d9dd79a7ca5d0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/a0/052b0261f603af86c9ad7b1c4d392041289e74": "6c3fbbacea7cceafbfa8a7d9ef1f1601",
".git/objects/a1/de8a6762ab6b3bb277cf5412193add9b8fc5a3": "ee23c2c3646ab097258213f25121d274",
".git/objects/a3/e1195f78265ba942965880d004ff8e07224b43": "96b67c7f7d040ef9f5758fb43c53cb46",
".git/objects/a4/c9398237cf5bacd4c72078818eeeb24bb9c809": "69d4cac00d97d58db2faf21e427aeced",
".git/objects/a7/d9d89a18b02f6d5ec69e704a57cb7c68ac68ef": "879890877395605126bba03e7d7467d6",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ab/2dbcea8a7efe6cbdab2fb81d35b981d67d2ed7": "c9b405eafbdb312ddd0055f1fa77dc7d",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/ca9545b6f23e78c85de34d8b8330849510db11": "bace441a1cca81017440e5950b8c5425",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/50c828254e73c225377b30de8f6be700a35916": "87328c8715b1cdbdf29836385def957b",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/fa1caf35e2593ef36d028cf49dc076c824adfb": "7702b2b27e1d232a25458555809b4a61",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c2/fdf39ad694826de16cbdd6ace5d207d2ae5e9a": "bd6972585d445c9a466f1682be2e97a7",
".git/objects/c5/41edfd8fc0580f10bec7642a7b52c8690b8e64": "ac983b403eaca527aeb3d17d8f28e4de",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/32ab32035ef5324dfa5f7db7b04fafa89f6f5b": "568c9bcca0cdb73346ff17d992fa86a8",
".git/objects/cf/7ec99288ed09cba89d34a06bbad25121fb554a": "edf4e2f5a006b573efcc5cf1054e8b50",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/bb26d2b4147796b4405a4739f560846304c698": "090e8740acf88953b6fea312968aa1d7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/dc/d40c9ad1f8bf0d31de694a26ce60d9d522f1ac": "b5c7534cf2a6a899437665504167dc17",
".git/objects/df/bbc622b1c88e25d3b27d607075fe2febaebe02": "7308a3ddc117c67b9cea3283e42ccc54",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e2/ea63f177cf471a3a0e6ca3a0bded3cda95538d": "096f6cabcdebdcb55edba3650c7c6302",
".git/objects/e3/a5dd751ebe9a0f32f48c53b66e7368702e14e8": "94dd70b1c772eafa6bcf8b21dc25d3ae",
".git/objects/e5/1cf43749fa2b44a009405e237375566959cbb3": "aa730cbba6fd154963985f3371eee86f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/323ca2dd6d81b3880226be7b4ff0da99f5e4b2": "0c3b5db15efeb41326dfd1c43bea08fa",
".git/objects/e9/99dcdf0247813be9b861c19d1666ea65cd3a8c": "07c1f77584b9b0da54092d087d0259a2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/1348c6157f3ac02c86fe20d2e55393d318c279": "2daf1784b21d8cb03d87d91a65d2b627",
".git/objects/f5/494e93f41dbf1032084ea774c8835e319f08a0": "715e37cad7f7bb420745672490258d07",
".git/objects/f8/3ff41f972cc8fd5c90ad30b36b57f47f9e2ce0": "30ebdee9d405df5ce5a60e02d9c4bea3",
".git/objects/fa/2ee721b8faed5485720c686c3ff40436544f9d": "3dbe328e49b59deeccc66a8b87a89b3e",
".git/objects/fa/98a067baff9aaaa13e8243bceec05d5cb4739c": "644d091f59c7d6b71de6ff664130d997",
".git/objects/fb/2d2ed4b8ee675d12ea5f4d36155137969f5594": "24d672f74db8d0122519bb223947cfb5",
".git/refs/heads/master": "25529dd27b6fb74a108dc5aae15d308a",
".git/refs/remotes/origin/master": "25529dd27b6fb74a108dc5aae15d308a",
"assets/AssetManifest.bin": "bea40832f89ba6611723a4120a8f263e",
"assets/AssetManifest.bin.json": "0d1f78fcaabb30752b5bbd06fc07c9e4",
"assets/AssetManifest.json": "2a7a8dc9c705fc70644cd520d6e0026d",
"assets/assets/app/1024.png": "5b912dc3a2fcb99be953c94e6b6a2a46",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/colored.png": "5ffcffb8a0b4dd69df796cb9666d7b78",
"assets/assets/photos/home.png": "6bdcf625d74003de0589a22c932fd6e4",
"assets/assets/photos/homeRawan.png": "15537339a23f3e67b773cb58c0dce947",
"assets/assets/photos/mobile.png": "3ab09ecc4eee8391caf9fb6bd2fc5cab",
"assets/assets/photos/Rawan.jpg": "609375b83036bf0fe9e4803dea59720e",
"assets/assets/photos/RawanHome.png": "eca1267b6ba980a4784999aea4fffaa8",
"assets/assets/photos/RawanMohamed.jpg": "eab23555e972212450cf80b1fad6dd63",
"assets/assets/projects/aast_magazine.png": "122b506323b0e8b5310e00d1e8cc1904",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/Arab.png": "e6e9a46329a106d8ebb876449886b23a",
"assets/assets/projects/Arch.png": "a396369d77b99348f0af1339cb06cbf7",
"assets/assets/projects/Architecture%2520in%2520Flutter.jpg": "db2334c16a2b4724adc67615d2c7e397",
"assets/assets/projects/Architecture%2520in%2520Flutter1.jpg": "8beef5755566a7eb3a2e1d8365e32f36",
"assets/assets/projects/award.png": "417b847745ba5a18e382756c003b1a18",
"assets/assets/projects/banner.png": "fb7088f64e98bff584c8e5653bd80af0",
"assets/assets/projects/Book.png": "05d9391a6f9a8c5f5d938dbbcb07bf83",
"assets/assets/projects/Books.png": "81a69e555f58558aa6efb681ea5b345b",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/ecpc.png": "8857d399e4ac46a8599d9960706f2e63",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/Hands.png": "906169b736f916eb7954fc2395d028e8",
"assets/assets/projects/IDs.png": "5056a89e9bdc224fdd4603b71681c2c4",
"assets/assets/projects/image2.png": "805ae4886b71d49df3bd889e6f43b310",
"assets/assets/projects/img.png": "ba8c4e79e214dcd9a04e2d24a991832a",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/logo.png": "0df5be54d748f0f6b63f79d282bed1b1",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/ObjectDetection.png": "3358f1f9869df61ee6606d139d29ec0c",
"assets/assets/projects/Personal1.png": "c55c6d7bc3760033cd2fa44cc0d965f0",
"assets/assets/projects/publish.png": "36fb9c4c4c0dfa3f8fbaf0ba18992c99",
"assets/assets/projects/Publishing.png": "860c14ec9e1f313bed637b2beefab4e7",
"assets/assets/projects/semicolon.png": "f9f0d3879c13f49e8bb4aac02a782078",
"assets/assets/projects/studentcouncil.png": "6535a2ee924fec4b87c5b2c08d3096f0",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/Icon_dentistry.png": "20d8eb8f96fa67667c169f2220d50fab",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/work/AAST_AI.png": "2e28a2f64927e0cae8c139b7222f6172",
"assets/assets/work/Arab.png": "b4e2ca45344b5f0a07d2294f442523c6",
"assets/assets/work/DE.png": "e97938bda3dc1150a6edf5b07807761f",
"assets/assets/work/Dentistry.png": "e81ce7c67eefb45b5136c3f18f9e6520",
"assets/assets/work/SemiColon.png": "2a8c1a081dc437f4aa0ec0fa9e78ffe1",
"assets/assets/work/workk.png": "80d6dcbeb0604fd36d284ca3ad9b1f20",
"assets/data.json": "75e294afb64f1d9cbfbb13f3f4a4644d",
"assets/FontManifest.json": "eb13a0d169d41e78994c5d6eb9075409",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "4cfa64d737e21ba515e59cd5ce2565d1",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "cd203e4ba5d44477a846df92a450b1c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "61b493df9635f221d909421e8769acb0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a45daff2dfd9b0fa83397647a4285a27",
"icons/Icon-192.png": "002516a4b23f153b7ac2928347c377b1",
"icons/Icon-512.png": "84780d2dfe97536ad1b68213079cc78b",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0b3ae0ca9dfd328b4909b535b36cb186",
"/": "0b3ae0ca9dfd328b4909b535b36cb186",
"main.dart.js": "c214a656fcc379fe7df2ae51da60c9c0",
"manifest.json": "b4f9e250047c64a14f3ce4b5c7c728d4",
"version.json": "a29e8b22a08aa0274b027931eec216c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
