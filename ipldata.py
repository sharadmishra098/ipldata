import csv
import json


def read_file(file):
    with open(file, 'r') as csv_file:
        csv_reader = csv.reader(csv_file)
        temp = []
        for row in csv_reader:
            temp.append(row)
    return temp


def team_total():
    file = read_file("deliveries.csv")
    line_c = 0
    total_runs = {}
    for row in file:
        if line_c == 0:
            line_c += 1
        else:
            if row[2] not in total_runs:
                total_runs[row[2]] = int(row[17])
            else:
                total_runs[row[2]] += int(row[17])
    with open('data1.json', 'w') as fp:
        json.dump(total_runs, fp)
    


def rcb_total():
    file = read_file("deliveries.csv")
    line_c = 0
    rcb_batsman = {}
    for row in file:
        if line_c == 0:
            line_c += 1
        else:
            if row[2] == "Royal Challengers Bangalore":
                if row[6] not in rcb_batsman:
                    rcb_batsman[row[6]] = int(row[15])
                else:
                    rcb_batsman[row[6]] += int(row[15])
    


def umpire_country():
    file = read_file("umpires.csv")
    line_c = 0
    umpire_list = []
    for row in file:
        if line_c == 0:
            line_c += 1
        else:
            if row[1] == "India":
                continue
            else:
                umpire_list.append(row[1])
    umpire_dict = {}
    for x in umpire_list:
        if x not in umpire_dict:
            umpire_dict[x] = 1
        else:
            umpire_dict[x] += 1
    


def by_season():
    file = read_file("matches.csv")
    season = {}
    line_c = 0
    for row in file:
        if line_c == 0:
            line_c += 1
        else:
            if row[1] not in season:
                season[row[1]] = {}
            else:
                if row[4] not in season[row[1]]:
                    season[row[1]][row[4]] = 1
                else:
                    season[row[1]][row[4]] += 1


def main():
    team_total()

    rcb_total()

    umpire_country()

    by_season()


if __name__ == "__main__":
    main()