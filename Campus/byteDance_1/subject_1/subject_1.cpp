#include<iostream>
#include<vector>
#include<string>
using namespace std;
int main(){
	int n,m;
	cin>>n;
	vector<int> v1;
	while(n--){
		int user;
		cin>>user;
		v1.push_back(user);
	}
	cin>>m;
 	int l,r,k;

 	while(m--){
 		cin>>l>>r>>k;
 		int count=0;
 		int j=(l-1);
 		for(;j<r;j++){
 		    if(v1[j] == k){
 		    count++;
 		    }
 		}
 		cout<<count<<endl;
 	}
}
