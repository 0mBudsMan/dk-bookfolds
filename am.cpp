#include <bits/stdc++.h>
using namespace std;

int findMaximumDistance(int grid_count, vector<string> &grid) {
    int n = grid.size(), m = grid[0].size();
    vector<vector<int>> dist(n, vector<int>(m, INT_MAX));
    queue<pair<int, int>> q;
    pair<int, int> start, end;

    // Step 1: Find all obstacles, start ('S'), and end ('E')
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (grid[i][j] == '*') {
                dist[i][j] = 0;
                q.push({i, j});
            } else if (grid[i][j] == 'S') {
                start = {i, j};
            } else if (grid[i][j] == 'E') {
                end = {i, j};
            }
        }
    }

    // Step 2: Multi-source BFS to compute shortest distance to any obstacle
    int dx[] = {-1, 1, 0, 0}, dy[] = {0, 0, -1, 1};
    while (!q.empty()) {
        auto [x, y] = q.front();
        q.pop();
        for (int d = 0; d < 4; d++) {
            int nx = x + dx[d], ny = y + dy[d];
            if (nx >= 0 && ny >= 0 && nx < n && ny < m && dist[nx][ny] == INT_MAX) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx, ny});
            }
        }
    }

    // Step 3: Maximize the minimum distance from obstacles using BFS
    priority_queue<pair<int, pair<int, int>>> pq;
    pq.push({dist[start.first][start.second], start});
    vector<vector<int>> maxDist(n, vector<int>(m, -1));
    maxDist[start.first][start.second] = dist[start.first][start.second];

    while (!pq.empty()) {
        auto [curDist, pos] = pq.top();
        pq.pop();
        int x = pos.first, y = pos.second;
        
        if (pos == end) return curDist;  // Reached the destination

        for (int d = 0; d < 4; d++) {
            int nx = x + dx[d], ny = y + dy[d];
            if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
                int newDist = min(curDist, dist[nx][ny]);
                if (newDist > maxDist[nx][ny]) {
                    maxDist[nx][ny] = newDist;
                    pq.push({newDist, {nx, ny}});
                }
            }
        }
    }

    return -1; // If no valid path is found
}

int main() {
    int n;
    cin >> n;
    vector<string> grid(n);
    for (int i = 0; i < n; i++) {
        cin >> grid[i];
    }
    cout << findMaximumDistance(n, grid) << endl;
    return 0;
}
