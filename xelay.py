import webapp2
import os
from google.appengine.ext.webapp import template

class MainHandler(webapp2.RequestHandler):
  def get (self):
    q = self.request.path
    if q == '/':
      q = '/index.html'

    path = os.path.join(os.path.dirname(__file__), q[1:])
    content = template.render(path, {})
    self.response.headers ['Content-Type'] = 'text/html'
    self.response.out.write(template.render('layout.html', {'content': content}))

app = webapp2.WSGIApplication([
    ('/.*', MainHandler)
], debug=True)
