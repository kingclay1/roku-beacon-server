from flask import Flask, request
import logging

app = Flask(_name_)
logging.basicConfig(level=logging.INFO)

@app.route('/beacon', methods=['GET']
def beacon():
    data = request.args.to_dict()
    logging.info(f"App launch Beacon received: {data}")
    return '',204 #No content
