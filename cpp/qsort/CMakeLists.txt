cmake_minimum_required (VERSION 2.6)
project (qsort)

# add the executable
add_executable(qsort qsort.cpp)

include(CTest)

# does the usage message work?
add_test (qsortUsage qsort)
set_tests_properties (qsortUsage PROPERTIES PASS_REGULAR_EXPRESSION "Usage:.*number")
