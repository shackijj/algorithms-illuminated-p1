#include <gtest/gtest.h>
#include "gmock/gmock.h"
#include <qsort.hpp>

TEST(qsortTest, ArrayWithDescentElement) {
    int array1[] = {1, 2, 3};
    ASSERT_EQ(qsort(array1, 3), 3);
    ASSERT_THAT(array1, testing::ElementsAre(1, 2, 3));

    int array2[] = {3, 2, 1, 5};
    ASSERT_EQ(qsort(array2, 4), 4);
    ASSERT_THAT(array2, testing::ElementsAre(1, 2, 3, 5));
}

TEST(qsortTest, ArrayWithRepeatingElement) {
    int array[] = {3, 2, 2, 1, 5};
    qsort(array, 5);
    ASSERT_THAT(array, testing::ElementsAre(1, 2, 2, 3, 5));
}