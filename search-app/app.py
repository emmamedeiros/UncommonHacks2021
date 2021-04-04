# library.py
from flask import Flask,  render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = ''
db = SQLAlchemy(app)

class Artwork(db.Model):
    uid = db.Column(db.Integer, primary_key=True)
    org_id = db.Column(db.Integer)
    title = db.Column(db.String())
    artist = db.Column(db.String())
    year = db.Column(db.Int())
    display_date = db.Column(db.DateTime)
    typeS = db.Column(db.String())
    org = db.Column(db.String())
    display_org = db.Column(db.String())


@app.route("/")
def main():
    return render_template("index.html")

#endpoint for search
@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == "POST":
        artwork = request.form['artwork']
        # search by author or book
        cursor.execute("SELECT name, artist from Artwork WHERE name LIKE %s OR artist LIKE %s", (artwork, artwork))
        conn.commit()
        data = cursor.fetchall()

if __name__ == "__main__":
    app.run(debug=True)