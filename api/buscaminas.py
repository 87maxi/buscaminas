from flask import Flask
from flask import jsonify
from flask_cors import CORS
import random 

app = Flask(__name__)
#Todo create virtuialhost
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/panel")
def panel():
    panel = []
    #ToDo POST parameters *7
    mine_limit=9
    panel_y = 10
    panel_x = 10

    idx=0
    for y in range(panel_y):
        y += 1
        for x in range(panel_x):
            x +=1
            mine = False
            if len([p["mine"] for p in panel if p['mine'] == True]) < mine_limit:
                mine = random.choice([True, False])
            idx+=1
            panel.append(dict(x=x, y=y, mine=mine, idx=idx))

    return jsonify(panel)
