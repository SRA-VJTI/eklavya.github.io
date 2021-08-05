from pprint import pprint

file1 = open('./scoreboard.md', 'r')

lines = [line.split("|") for line in file1.readlines()]
file1.close()
team_list = []
i = 0

for line in lines:
    if i == 0 or i == 1:
        i += 1
        continue
    team = []
    team.append(line[1].strip())
    team.append(int(line[2].strip()))
    team_list.append(team)
    i += 1

i = 1
for team in team_list:
    print("{}. {}".format(i, team[0]))
    i += 1


team_change = int(input("Print team name to update:"))
team_change -= 1
# print(team_list[team_change][0])
points_change = int(input("Add marks: "))
team_list[team_change][1] += points_change


def cmp(x):
    return x[1]


team_list.sort(key=cmp, reverse=True)

with open("scoreboard.md", "w") as scoreb:
    scoreb.write("|Team|Score|\n|---|---|\n")
    for team in team_list:
        scoreb.write("|{}|{}|\n".format(team[0], team[1]))
