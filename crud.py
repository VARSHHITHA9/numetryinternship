from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_name():
    return 'Hello %s!' 

if __name__ == '__main__':
     app.run()
