#include <iostream>
using namespace std;
int main() {
    int n, q;
    cin>>n;
    int* favor = new int[n];
    for(int i = 0; i < n; i++) {
        cin>>favor[i];
    }
    cin>>q;
    int** query = new int*[q];
    for(int i = 0; i < q; i++) {
        query[i] = new int[3];
        for(int j = 0; j < 3; j++) {
            cin>>query[i][j];
        }
    }
    for(int i = 0; i < q; i++) {
        int count = 0;
        for(int  j = query[i][0]-1; j < query[i][1]; j++) {
            if(favor[j] == query[i][2]) {
                count++;
            }
        }
        cout<<count<<endl;
    }
    delete []favor;
    for(int i = 0; i < q; i++) {
        delete []query[i];
    }
    return 0;
}
