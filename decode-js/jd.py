import requests
import execjs

from loguru import logger

cookies = {
    '__jdu': '1682783299125347623149',
    'shshshfp': 'b124090eec340dd23ecc54acc6e31ac0',
    'shshshfpa': '6429c87f-0e91-ac68-db8b-84318f0619bd-1682783312',
    'shshshfpx': '6429c87f-0e91-ac68-db8b-84318f0619bd-1682783312',
    'pinId': 'M6r9zXLfyLPY9B0gUAdc17V9-x-f3wj7',
    'unpl': 'JF8EALFnNSttWUgDBBsAGkZASA4HW1tfTR5UZm8CVFpYTlcNHQAYQRR7XlVdXxRKHh9uYhRUW1NIUg4eBCsSEXteU11bD00VB2xXVgQFDQ8WUUtBSUt-SVxRWFULShAAamUNZG1bS2QFGjIbFRlIW11cXgBDFwBrZQBSWltJVAATMhoiF3ttZFxcCEIUBF9mNVVtGh8IDRMEGBNdS1pdXVsBSRQLZ2cGUF9dTVMGGQIeGiBKbVc',
    '__jdv': '76161171|baidu-search|t_262767352_baidusearch|cpc|304792062439_0_02f0130ea2bb47f78f896161429732b5|1691141270828',
    'areaId': '22',
    'ipLoc-djd': '22-1930-50948-71603',
    'PCSYCityID': 'CN_510000_510100_0',
    '__jdc': '122270672',
    'mba_muid': '1682783299125347623149',
    '__jd_ref_cls': 'LoginDisposition_Go',
    'wlfstk_smdl': 'ognux7wcq4wozbc3jrnpak7pz0auf3b4',
    '3AB9D23F7A4B3C9B': 'LK4YZNCK3LLWYD4GERHEGQ6XB7ARKDWHHEACG7NO72IBKK6WLJSLZCZXIVMER2IPOB366TDYKGDPUA7M3OWEAKEXOI',
    'TrackID': '1tlkDVyUbT505hSDalO1XkceCw6oDDO6hBJKRH-O19CO1GDF8VaCliUSKaQc7DjHnUNM3gJE28RD9v-stWrOVlTaSsDmfEfFiYqO8JIt8utw',
    'thor': 'F57CCB63F0F551A8B4F8B83F8DEA499506AC3A5313249290FDA50CE25C733EF9C2398DAF7E43C999920BB61E73E4F83D042DE521F5E23BAB2377E1CF1AD09B902652AF62AC8A04CC6FB2415A05E48063BCF4B2A691FAE93B1B73E8E2A3CD53ED415FBFA4E3639DB7DAC0B77E82E114AE17CB1DF0BD2B30D1BD9583D1CD26A2FAA9B7A45E146172822F230CDAB39F0B0E431021BA4DAF0ED727218BD0FACC1777',
    'flash': '2_YUJMvDNsS2T0Exs3dlfUHz9nMIhb8hhfuTB2vwJQtp7VSdg-SsY5oXhzaULWjVRgESulpQ97RGLbDdsySKKJEi-ADOXnDuHLAhMekzqSp1j*',
    'pin': 'jd_57f0869b40c7e',
    'unick': 'mpb9835',
    'ceshi3.com': '103',
    '_tp': 'Sryg3AgE0wKg2eqxFgqs4wupfTeVjoYxteSa%2BuG3hFg%3D',
    '_pst': 'jd_57f0869b40c7e',
    'jsavif': '1',
    'token': '39173b18f5288106c35030ae78ca9464,3,939964',
    '__tk': 'd4a8b2d15dc4b3f1f9a590c5aaaada18,3,939964',
    '__jda': '122270672.1682783299125347623149.1682783299.1691933614.1691935863.11',
    'shshshfpb': 'spnFp-hAhdGYmKCYndY2Bow',
    '3AB9D23F7A4B3CSS': 'jdd03LK4YZNCK3LLWYD4GERHEGQ6XB7ARKDWHHEACG7NO72IBKK6WLJSLZCZXIVMER2IPOB366TDYKGDPUA7M3OWEAKEXOIAAAAMJ55FX2GQAAAAADCSU4GEK2D7AX4X',
    'shshshsID': 'afd485103b8a13d8c3685a48a79023c1_4_1691936849670',
    '__jdb': '122270672.4.1682783299125347623149|11.1691935863',
}

headers = {
    'authority': 'api.m.jd.com',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'origin': 'https://item.jd.com',
    'referer': 'https://item.jd.com/',
    'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'x-referer-page': 'https://item.jd.com/100008169496.html',
    'x-rp-client': 'h5_1.0.0',
}

ctx = execjs.compile(open("./jdH5st.js", "r", encoding="utf-8").read())

params = ctx.call('get_jd_params')
logger.info("[*] 执行js获取到参数:{}", params)

response = requests.get('https://api.m.jd.com/', params=params, cookies=cookies,headers=headers)
logger.info("status_code:{}",response.status_code)
logger.info("response headers:{}",response.headers)
logger.info(response.text)
