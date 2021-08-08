from pprint import pprint
import sys


file1 = open('./content/scoreboard.md', 'r')

lines = [line.split("|") for line in file1.readlines()]
file1.close()
team_dict = {}
i = 0

for line in lines:
    if i == 0 or i == 1:
        i += 1
        continue
    team_dict[line[1]] = int(line[2])
    i += 1

input_string = sys.argv[1]
team_name = input_string.split(":")[0]
team_score_change = int(input_string.split(":")[1])
team_dict[team_name] += team_score_change

team_dict = {k: v for k, v in sorted(team_dict.items(), key=lambda item: item[1], reverse=True)}

with open("./content/scoreboard.md", "w") as scoreb:
    scoreb.write("|Team|Score|\n|---|---|\n")
    for team, score in team_dict.items():
        scoreb.write("|{}|{}|\n".format(team, score))
