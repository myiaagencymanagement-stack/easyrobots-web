# Sirve en local los borradores de la nueva oferta (Gama AURA) con la URL que
# tendran al publicarse, y abre el navegador. Se lanza con ver-borradores.bat.
# Por que hace falta: las paginas usan rutas absolutas (/assets/...) y abiertas
# con doble clic no cargan ni imagenes ni tipografias.
import http.server, functools, os, threading, webbrowser

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.join(AQUI, '..', 'src')
PUERTO = 8765
RUTAS = {
    '/': 'home-aura-borrador.html',
    '/aura-business/': 'funnel-aura-business-borrador.html',
    '/aura-setter/': 'funnel-aura-setter-borrador.html',
    '/clinicas/': 'nicho-clinicas-borrador.html',
    '/inmobiliarias/': 'nicho-inmobiliarias-borrador.html',
    '/concesionarios/': 'nicho-concesionarios-borrador.html',
    '/ecommerce/': 'nicho-ecommerce-borrador.html',
    '/coaching/': 'nicho-coaching-borrador.html',
}
ICONOS = {'/favicon.ico': ('favicon/favicon.ico', 'image/x-icon'),
          '/apple-touch-icon.png': ('favicon/apple-touch-icon.png', 'image/png')}

class H(http.server.SimpleHTTPRequestHandler):
    def responder(self, ruta, tipo):
        data = open(os.path.join(AQUI, ruta), 'rb').read()
        self.send_response(200); self.send_header('Content-Type', tipo)
        self.send_header('Cache-Control', 'no-store'); self.end_headers(); self.wfile.write(data)
    def do_GET(self):
        ruta = self.path.split('?')[0].split('#')[0]
        if ruta in RUTAS: return self.responder(RUTAS[ruta], 'text/html; charset=utf-8')
        if ruta in ICONOS: return self.responder(*ICONOS[ruta])
        if ruta.startswith('/assets/aura-'): return self.responder('img/' + ruta.split('/')[-1], 'image/webp')
        return super().do_GET()
    def log_message(self, *a): pass

if __name__ == '__main__':
    servidor = http.server.ThreadingHTTPServer(('127.0.0.1', PUERTO), functools.partial(H, directory=RAIZ))
    url = f'http://127.0.0.1:{PUERTO}/'
    print('Borradores en', url, '- cierra esta ventana para apagarlo.')
    threading.Timer(1, lambda: webbrowser.open(url)).start()
    servidor.serve_forever()
