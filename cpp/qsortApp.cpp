#include <qsort.hpp>
#include <vector>
#include <iostream>

using namespace std;
int main()
{   
    int len = 10000;
    int lines [len];

    for (int i = 0; i < len; i++) {
        int n;
        cin >> n;
        cin.ignore(numeric_limits<streamsize>::max(), '\n');

        lines[i] = n;
    }

    int count = qsort(lines, len);
    cout << count << "\n";
    return 0;
}