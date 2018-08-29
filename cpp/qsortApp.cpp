#include <qsort.hpp>
#include <vector>
#include <iostream>

using namespace std;

int main()
{
    int len;
    cin >> len;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    
    vector<int> lines(len);

    for (int i = 0; i < len; i++) {
        int n;
        cin >> n;
        cin.ignore(numeric_limits<streamsize>::max(), '\n');

        lines[i] = n;
    }

    for (int i = 0; i < len; i++) {
        cout << "idx " << i << " value: " << lines[i] << "\n";
    }

    return 0;
}