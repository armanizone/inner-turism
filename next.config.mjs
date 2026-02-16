/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuC296WHsrpuf2v9F9keGzQdWU2fJgzS69fDeqr2yo_8vsvJqBVyboUyODW44ZF8x4joTYQJu5tp5wTZO5s9-3rHX1sisPg1OBdiJGdkdVZikcWhG_YX4qobSAtuJT4lL6k0YHgw43xMvEikeTPJ9M6I0lB_yxrIamikKiw5o9aDwgMasr9oVKADtah_bKsyC46W0cY3jlmjr_7WsTT6Wjixa2xevqrwc1l1clK9PguLinRyF8-hbA7hg7V8lgdI_BQ2xWnO_wq9B7c'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuBNT0DmmLaa_v_4SAnjW1kkiRTdJPqqtd-bxKOXZeknmXZySaG2HHkOZJdWfIoFPH7_xDFzn0pnoVJNxYN60k2Zi5C-ZPv8P1ebmHzY5YaasY2i-L0nYNLS1P_zvsfRjROCtBZkqN2z2oXL2GoJq_OEkcUSgIBA707sA5GdIO7_LJh40NNaitnVxkZ-QNDNv1tflfNbnkrECiwhjFYnI4j0znmnkBsLrx7HdQ8_Z-pgQfUFsYcT_DbdjUInCDutUPaeiAaW2eDu3L4'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuDbCfgGhvjZ4Uh_wJkvPMG1nQ3wx8ec9PfftEvU2A9v2oKVrd_9vuYDdVe1y5MzYhNeZTc15VOIt_45z9fqmzF2-_04t-NOUH73fupmVNqjTxG3JJdg3vdFobl8_UEoL7-3bJuhppBlIBn2R8KMCSmkXBZmjGyYJkl61CYV2RpjtW9CFblT875wVT1Fg_GsOgmlNO7ZJ2pkTEGCPT9t_qbimMeWVANuF7-j7u9RxdTP0Gb9LQUVujUlyYF6zNznTPd3S0WYS3tcIbU'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuB7Trz3s68PZDPOynYF-DvHe2se28Ts6RyjHmCSMe-vEgqjeypXI1bA8VbOvpuEJgnnUk8cXgo0Rk7-Klr6LoKKN-hvWqFgsNCu3D0xIDPDw6VWl9DE9TuU3TwI819NfPBAhBXx0XLFXIyyT7Nrb-T12UYHBPG16_BrBqYGsY4TwRAnNtjviooacHLd8z30FOP-2oB4kcfCTQJrW3nDijCbrMjY18GoVuF-SJM36gFA9CPfIGcQZdUkY_K77mPoZFAgqTTyHv4lLug'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuBwynlS6suSuifanQ2H9AOvOS7MZ0OtKTTeGm6fSQe_PMBCOKMnfdFZhDf0LLxqJSEXXbeVCzUsM8q3gR9KjVaW53NrkjzYr77ldGDFBp6En5efsCMZYUKQ-eTbSx3CH1-2Ix0n3K1_qSVJBm3-d7CAWS1e1w3gE2cEDZUqAzLCOQe4jM6AapuUkiJ19FMDYUk_ZDi9LUmVytuTwa5MPspbcTEFaBE6TWcKWt8tCTCLvZTcC1kmaUdJOa7WQgAjAfqPGXTOe83gGN0'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuCloEoPhd4hXf9tKQ-mOidrLyjW2HOhwqg1fgLQYxvA3iKdltdoqGQdF-KI0E_9QILRGOL73TH2UT0lIwfPcAputDF4Gwq91c0LhPAG57Mb_dD_rn3JfGLtFn8oulS2cRK9VZwOIpISB-6MTM6BFLnygO_21eEUkKNnrO_0VyvC407BwlhtjQUhG08ZvppBt4Uf9ySYHnAlKQEU-9fbtWFxEafBRp4eMj-LvKwHQ33QCTwTjiJnulu-DKJQigNTkoY399iSiGMRZXY'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-JaklhyYmHxS9JrXeHmb7Jf6y4nzj_ZOwQPhA1vEDoCazSkVAkWmEcbdFXgQ2VhQ6r_tIEy8aL1Zulh-UmNwc1k8tVBkURqMcxwuX7LFe7JwpBK0xHRoL_GTkDMFHK9RNk56woN7Gw83KKIZDuBMnjtpGJ2QrbLaIlDxHVWFB4HkoIhTxTKYfhHO738OtJLwL1xtGY4escTqCWGZJE4n4Rf8-sZ0xtTkNoUVwfbsNPO2iKVSkGxAoE6zJvMkz1Wmy2rsXhhOYU4'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuDDZrvKlvxknW81qVkbspE1d1ynkJIYg8yLbZXTuG7BXsi4iDCngTBa1FsQCTuVstjB0RQbLGUUJJTtIcBhtNtZvfaHJSfs4rk6VJau3jRntrPkVsCOwDthFVtHB-NBzHGIRme92-Iu7feYrjLr3N3VzM1dVEhKj-C4fwxlZTJByKSzxiNFOY7HqYOuL_pafLzK00E8nlHhy5ZauMjuafNoAz4pmw23X6JmahuGD_rjf7pyCA-1APm32sjEFMiSTdvC25baQnQ6cTc'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuBhbDoTD7Myd9NXnqMzJfy1M33fcdojKwxutK1wNDy9wBjaqZe3OGF5EwmgTjAbs-puPEqmrXo1OAIpbnY5KXOhPKyh0t4yP7Yh1kvnmhkauY0HPNhTYiP0DMObDOr19FzjzbddKl9qMWSXMAcXTboXXMzFJsIrp8XK9sM-QqBJTl8eBWj4uR2RpJroZ3q7ihtxnQM4DWzYS-AYnzQpdIPeZRgGEGdDeT5DOGkcWqTqC2LB3h35DcbjAnqASIfx-BYYqO4cGhbQJKI'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuA36ZFe4m54QHJ4FK562C7tVuObYL9qfUxknNQ-PO8EHEeUUV-UTiXm-Uui-ufpgGfDEYxDEibrrQ9ZZNoHpnH9zqSEoPs2JCUoHPQIbuPq2PNE65IhNiTMXakH9qy5XaBjVU6d8rxPE84pwpWKpTzL5jGxjgJH0SlftwS7ngKjsqfg73nVBvMWXBnqvAwGYM7CQuReKIztAP5ntnER2NNrkDh_XnaImH4fVkjbv-eSt1pwGnWfTRRdybdy0MuBguJtlbR4MeeHkjs'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuBv7XkRiuQtIyFsnPw6DW787SZlFjc3lUF-kp8g4FbSVQF15tutZPr5Ty0aKNkcco3N3nsrgopmHFrevTnqEci57OYPhLJLQcxUnHgXjGOidAmvieYn3y5Dksj3nOPkzB8m9vm4WH37ISAs4WoHaMqlyHgmL81Yvd9N0dhORoOkB2bo5IGzO8KatGHZOltjjHaQyppOTJAcsHWzRvFiT3PglPQ_g0GmTVd8gYASABPzeNBy55o68YspbslZHJs-jvDeljTPYHnXxhI'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuAzgzZey0thLVW1sbMlUxLVF63CwB2JTACeeYnAEVporJf3HvfUNnB__caYC5EuwR2u9vEJ3u8PDhY6GCKGTRWLWScxtEUBzaZELdMXByZU5fh1okqQ_jHrrJ3dyB1CUEJ4z2y9nVOIQTtqtQ4nDHjxmmHRLfPs-IbE1w9qCqSkU1FlrjKYaPn5v2xmAkLvTCqprcJbrjy4GMtZVROVCEXTEQHcccunoxlFphkfwZKd3sxoW3Nnd19cyJU9Tn8r5nPI87dIFNJH76E'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuCi5Lzmb7iC6j5aIbQmCp3om7dlsd9AHRct8F6xniomvJKjVlWs8iQ61kYl7CtbM-X1AZ4BxZPYrce7pnCA67rZR2iVknGhYlD_BoK9H0rND9RlBnIMcUImbzWsTS77x1OFXraBx0QshnoBW3mgQ86YyFZS4k_FR_gnWYnEgQurF2aNsNLLPRkWjYUuJueYfpt7HHs0wGRxPcPIneZhS4IDZaPm4GOxyVO2K1y-TL9beWWYYAT1NJl5glitvw77PJj9hRQXAlsQCTc'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuDIA9nrStoUDCuEc0A_sJCl-VJokrkJKU0-wa2epnmLYX_BjjzE993EeZArXCmeT--f_BtMZosiFkBJAPAUZfneds1PtjedSayEFoFpEvwfbRA5tAQBYdjxRYRNUgfNqzCaAHv-_50RjwRKSn0CyJ5vJqUDv-x504Pi7h_jh4I2SLJf7l96Su56ppvJJbh3qI4EWT4jzLJT9aNd12HA9361V09Z5TCQiBFQroimXAPO5_mS02hYEUgVf4Ag89S4GtAB2x9pZ0UGwSM'),
      new URL('https://lh3.googleusercontent.com/aida-public/AB6AXuChdhiy3H6xw-VhNzDm5nI4Sw7B9DhW5cj88ixMcCzQaniukv2IiBWpZf6qRrEOaBH_ZfcJonxZlhxVDiqjTOBLooWy7UrI9v6ng47VQToA4rjBsknc74iYWjwm7poYNdJelbVFrqIVT_3dy37ttNxh4WPZmYQVSePH7PUWKNrIXcm9Xb5XmJV2ctpYL6BWCkmCbFLyn1df9KM68OeL4_ZTHZA2d1SDNxnsQ4BOXoZS2pxwmFk8_lnT64Q9HZIJjdSigk15ykpK9zs'),

      new URL('https://randomuser.me/api/portraits/men/20.jpg'),
      new URL('https://randomuser.me/api/portraits/women/32.jpg'),
      new URL('https://randomuser.me/api/portraits/men/33.jpg'),


      new URL('https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'),
      new URL('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80'),

    ],
  },
};

export default nextConfig;
